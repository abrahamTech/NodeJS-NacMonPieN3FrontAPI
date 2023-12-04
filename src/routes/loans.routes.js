import { Router } from "express";

import { authenticateToken } from "../middlewares/validateToken.js"
import { getLoans, getLoan, createLoan, updateLoan, deleteLoan } from "../controllers/loans.controller.js";

const router = Router();

router.get("/loans", authenticateToken, getLoans);

router.post("/loans", authenticateToken, createLoan);

router.get("/loans/:id", authenticateToken, getLoan);

router.put("/loans/:id", authenticateToken, updateLoan);

router.delete("/loans/:id", authenticateToken, deleteLoan);

export default router;