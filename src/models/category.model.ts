import { Schema, model, Document } from "mongoose";

export interface ICategory extends Document {
    categoryName: string;
    description?: string;
}

const categorySchema = new Schema<ICategory>(
    {
        categoryName: {
            type: String,
            required: true,
            unique: true,
        },
        description: String,
    },
    {
        timestamps: true,
    }
);

export default model<ICategory>("Category", categorySchema);