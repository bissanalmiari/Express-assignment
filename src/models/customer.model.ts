import { Schema, model, Document } from "mongoose";

export interface ICustomer extends Document {
    customerName: string;
    phoneNumber: string;
    address: string;
}

const customerSchema = new Schema<ICustomer>(
    {
        customerName: {
            type: String,
            required: true,
            trim: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default model<ICustomer>("Customer", customerSchema);