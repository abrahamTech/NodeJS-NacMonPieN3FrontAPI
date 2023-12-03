import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";


export const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("Conexion con la base de datos")
    } catch (error) {
        console.log("Error al momento de conectarse con la base de datos", error)
    }
}