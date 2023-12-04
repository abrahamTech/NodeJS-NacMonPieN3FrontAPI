import mongoose from "mongoose";

const loanSchema = new mongoose.Schema(
  {
    idMaterial: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Loan = mongoose.models.Loan || mongoose.model("Loan", loanSchema);

export default Loan;