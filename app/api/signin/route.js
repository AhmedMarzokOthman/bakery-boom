import { NextResponse } from 'next/server';
import connectDB from "@/config/database";
import adminModel from "@/models/AdminModel";
import bcrypt from "bcrypt";

export async function POST(req) {
    try {
        const { username, password } = await req.json();

        await connectDB();

        const user = await adminModel.findOne({ username });

        if (!user || !bcrypt.compareSync(password, user.password)) {
            return NextResponse.json(
                { error: "Invalid username or password" },
                { status: 401 }
            );
        }
        console.log(JSON.parse(JSON.stringify({ username: user.username, password: password })));
        return NextResponse.json(
            { message: "Login successful" },
            { status: 200 }
        );
    } catch (err) {
        return NextResponse.json(
            { error: "An error occurred while signing! " + err.message },
            { status: 500 }
        );
    }
}