import { Router } from "express";

import { register, login, logout, profile } from "../controllers/auth.controller.js";

import { authenticateToken } from "../middlewares/validateToken.js"

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

router.get("/profile", authenticateToken, profile);

export default router;
