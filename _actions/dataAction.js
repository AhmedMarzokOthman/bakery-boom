'use server'

import dataModel from "@/models/DataModel";
import connectDB from "@/config/database";

export async function getData() {
    try {
        await connectDB();
        const data = JSON.parse(JSON.stringify(await dataModel.find()));
        
        return { data };
    } catch (error) {
        return { errorMsg: error.message };
    }
}