import { Schema, model, Document, Types } from "mongoose";

export interface IOrder extends Document {
    customer: Types.ObjectId;
    orderDate: Date;
    totalAmount: number;
}

const orderSchema = new Schema<IOrder>(
    {
        customer: {
            type: Schema.Types.ObjectId,
            ref: "Customer",
            required: true,
        },

        orderDate: {
            type: Date,
            default: Date.now,
        },

        totalAmount: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default model<IOrder>("Order", orderSchema);