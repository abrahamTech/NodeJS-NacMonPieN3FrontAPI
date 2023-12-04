import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

//Rutas
import authRoutes from "./routes/auth.routes.js";
import loansRoutes from "./routes/loans.routes.js";

const app = express();

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", loansRoutes);

export default app;