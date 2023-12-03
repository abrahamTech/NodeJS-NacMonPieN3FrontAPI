import User from "../models/user.model.js";

export const register = async (req, res) => {
    
    try {
        const { email, password, username } = req.body;
    
        const newUser = new User({
            username,
            email,
            password,
        })
    
        const userSaved = await newUser.save();
        res.status(201).send("Usuario Registrado");
        // res.status(200).json(userSaved);
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const login = (req, res) => {
    res.send("login")
};