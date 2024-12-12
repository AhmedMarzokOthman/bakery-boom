import { Schema, model, models } from "mongoose";

const dataSchema = new Schema({
    logo: {
        logoBig: { type: String, default: "" },
        logoSmall: { type: String, default: "" },
    },
    swipingImages: {
        type: Array,
        default: []
    },
    howItHappensVideoLink: {
        type: String,
        default: ""
    },
    productCatalog: [
        {
            productName: { type: String, default: "" },
            productPrice: { type: String, default: "" },
            productImage: { type: String, default: "" }
        }
    ],
    feedBacks: [
        {
            name: { type: String, default: "" },
            phone: { type: String, default: "" },
            email: { type: String, default: "" },
            message: { type: String, default: "" }
        }
    ],
    contactUs: {
        email: { type: String, default: "" },
        phone: { type: String, default: "" },
        whatsapp: { type: String, default: "" },
        facebook: { type: String, default: "" },
        instagram: { type: String, default: "" },
        youtube: { type: String, default: "" },
        linkedIn: { type: String, default: "" },
        twitter: { type: String, default: "" }
    }
}, { timestamps: true });

const dataModel = models.siteComponent || model("siteComponent", dataSchema);

export default dataModel;

// test phonenumber: 0201234567890
// test message: Hello, your cakes are delicious! but it's too expensive and some of it is not fresh and i want to thank you for your service.
