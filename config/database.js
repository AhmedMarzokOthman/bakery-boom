import mongoose from "mongoose";

const connectDB = async () => {
    if (mongoose.connection.readyState) {
        return true;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");
        return true;
    } catch (err) {
        console.log("Error connecting to MongoDB", err)
    }
}

export default connectDB;