import mongoose from "mongoose";

const materialsSchema = new mongoose.Schema(
    {
        codeMaterial: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        pricePerGram: {
            type: Number,
          required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Materials = mongoose.models.Materials || mongoose.model("Materials", materialsSchema);

export default Materials;