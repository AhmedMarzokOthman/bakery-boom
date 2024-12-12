'use server'

import dataModel from "@/models/DataModel";
import connectDB from "@/config/database";

export async function getData() {
    try {
        await connectDB();
        const data = JSON.parse(JSON.stringify(await dataModel.find()));
        console.log(data);
        return { data };
    } catch (error) {
        return { errorMsg: error.message };
    }
}

export async function addData(data) {
    try {
        await connectDB();
        const newData = await dataModel.create(data);
        return { newData };
    } catch (error) {
        return { errorMsg: error.message };
    }
}