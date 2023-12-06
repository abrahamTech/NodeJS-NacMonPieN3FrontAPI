import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

//Rutas
import authRoutes from "./routes/auth.routes.js";
import loansRoutes from "./routes/loans.routes.js";

const app = express();

//Middlewares
app.use(cors({
    origin: "http://localhost:3000",
}));
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", loansRoutes);

export default app;