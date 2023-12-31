import Loan from "../models/loan.model.js"
import Materials from "../models/materials.model.js";

export const getLoans = async (req, res) => {
    try {
        const loans = await Loan.find({ user : req.user.id }).populate("user");
        res.json(loans);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getLoan = async (req, res) => {
    try {
        const loan = await Loan.findById(req.params.id);
        if(!loan) {
            return res.status(404).json({ message: "Loan not found" });
        }

        return res.json(loan);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const createLoan = async (req, res) => {
    try {
        const { idMaterial, weight, date } = req.body;
        const material = await Materials.findOne({codeMaterial: idMaterial});

        if(!material) {
            return res.status(404).json({ message: "Material not found" });
        }

        const loanAmount = weight * material.pricePerGram;

        const newLoan = new Loan({
            idMaterial,
            weight,
            loanAmount,
            date,
            user: req.user.id,
        });

        await newLoan.save();
        res.json(newLoan);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteLoan = async (req, res) => {
    try {
        const deletedLoan = await Loan.findByIdAndDelete(req.params.id);
        if (!deletedLoan){
            return res.status(404).json({ message: "Loan not found" });
        }
    
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const updateLoan = async (req, res) => {
    try {
        const { idMaterial, weight, date } = req.body;
        const loanUpdated = await Loan.findOneAndUpdate(
          { _id: req.params.id },
          { idMaterial, weight, date },
          { new: true }
        );
        return res.json(loanUpdated);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
