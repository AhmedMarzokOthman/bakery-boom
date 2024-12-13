import { NextResponse } from 'next/server';
import connectDB from "@/config/database";
import adminModel from "@/models/AdminModel";
import bcrypt from "bcrypt";

export async function POST(req) {
    try {
        const { username, password, confirmPassword } = await req.json();
        const hashedPassword = await bcrypt.hash(password, 10);
        const errMsgs = ["There is already an admin account!", "Password and confirm password do not match!"];

        await connectDB();

        //check if there is already a admins or not
        const admins = await adminModel.find();
        if (admins.length > 0) {
            return NextResponse.json(
                { error: errMsgs[0] },
                { status: 400 }
            );
        }

        //check if the username is already taken
        const user = await adminModel.findOne({ username });
        if (user) {
            return NextResponse.json(
                { error: errMsgs[0] },
                { status: 400 }
            );
        }

        //check if the password and confirm password match
        if (password !== confirmPassword) {
            return NextResponse.json(
                { error: errMsgs[1] },
                { status: 400 }
            );
        }

        //create a new admin
        const newAdmin = await adminModel.create({ username, password: hashedPassword });

        return NextResponse.json(
            { message: "Admin created successfully" },
            { adminData: newAdmin },
            { status: 200 }
        );
    } catch (err) {
        return NextResponse.json(
            { error: "An error occurred while signing up! " + err.message },
            { status: 500 }
        );
    }
}