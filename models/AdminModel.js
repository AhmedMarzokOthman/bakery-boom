import { Schema, model, models } from "mongoose";

const adminSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const adminModel = models.admin || model("admin", adminSchema);

export default adminModel;