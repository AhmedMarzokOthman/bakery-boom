'use server'

import adminModel from "@/models/AdminModel";
import connectDB from "@/config/database";

// export async function getPosts() {
//     try {
//         await connectDB();
//         const data = JSON.parse(JSON.stringify(await PostModel.find()));

//         return { data };
//     } catch (error) {
//         return { errorMsg: error.message };
//     }
// }

// export async function signIn(username, password) {
//     try {
//         await connectDB();

//         const data = JSON.parse(JSON.stringify(await adminModel.find()));

//         return { data };
//     } catch (error) {
//         return { errorMsg: error.message };
//     }
// }