import { SECRET_KEY } from "../config.js";
import jwt from "jsonwebtoken";

export async function createAccessToken(user) {
  return new Promise((resolve, reject) => {
    jwt.sign(user, SECRET_KEY, { expiresIn: "1d" }, 
        (err, token) => {
            if (err) reject(err);
            resolve(token);
        });
  });
}