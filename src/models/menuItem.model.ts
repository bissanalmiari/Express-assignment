import { Schema, model, Document, Types } from "mongoose";

export interface IMenuItem extends Document {
    itemName: string;
    price: number;
    category: Types.ObjectId;
    description?: string;
    imageUrl?: string;
    isAvailable: boolean;
}

const menuItemSchema = new Schema<IMenuItem>(
    {
        itemName: {
            type: String,
            required: true,
        },

        price: {
            type: Number,
            required: true,
        },

        category: {
            type: Schema.Types.ObjectId,
            ref: "Category",
            required: true,
        },

        description: String,

        imageUrl: String,

        isAvailable: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

export default model<IMenuItem>("MenuItem", menuItemSchema);