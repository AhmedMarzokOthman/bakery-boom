import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/config/database";
import bcrypt from "bcrypt";
import adminModel from "@/models/AdminModel";

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials) {
                const { username, password } = credentials;

                try {
                    await connectDB();

                    const admin = await adminModel.findOne({ username });

                    if (!admin) {
                        return null;
                    }

                    const isPasswordCorrect = await bcrypt.compare(password, admin.password);

                    if (!isPasswordCorrect) {
                        return null;
                    }

                    return admin;
                } catch (err) {
                    console.log("Error in Authorize: ", err);
                }
            }
        })
    ],
    Session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/admin/auth",
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
