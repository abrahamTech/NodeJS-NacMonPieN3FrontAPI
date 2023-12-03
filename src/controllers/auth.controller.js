import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/user.model.js";
import { createAccessToken } from "../libs/token.js";
import { SECRET_KEY } from "../config.js";

export const register = async (req, res) => {
    
    try {
        const { email, password, username } = req.body;

        const passwordHash = await bcrypt.hash(password, 10);
    
        const newUser = new User({
            username,
            email,
            password: passwordHash,
        })
    
        const userSaved = await newUser.save();

        // Generar y devolver un token
        const token = await createAccessToken({id: userSaved._id});
        res.cookie("token", token);

        console.log("Usuario Registrado");
        res.status(200).json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
        });
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    
    try {
        const { email, password} = req.body;

        const userFound = await User.findOne({ email });
        if(!userFound) {
            return res.status(400).json({
                message: ["The email does not exist"],
            });

        }

        const isMatch = await bcrypt.compare(password, userFound.password);
        if (!isMatch) {
            return res.status(400).json({
                message: ["The password is incorrect"],
            });
        }

        // Generar y devolver un token
        const token = await createAccessToken({id: userFound._id});
        res.cookie("token", token);

        console.log("Usuario Registrado");
        res.status(201).json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
        });
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
