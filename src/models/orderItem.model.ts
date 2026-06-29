import { Schema, model, Document, Types } from "mongoose";

export interface IOrderItem extends Document {
    order: Types.ObjectId;
    item: Types.ObjectId;
    quantity: number;
    unitPrice: number;
}

const orderItemSchema = new Schema<IOrderItem>(
    {
        order: {
            type: Schema.Types.ObjectId,
            ref: "Order",
            required: true,
        },

        item: {
            type: Schema.Types.ObjectId,
            ref: "MenuItem",
            required: true,
        },

        quantity: {
            type: Number,
            required: true,
            min: 1,
        },

        unitPrice: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default model<IOrderItem>("OrderItem", orderItemSchema);