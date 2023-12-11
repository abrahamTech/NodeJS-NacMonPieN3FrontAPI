"use client";

import { createContext, useContext, useState } from "react";

import { registerRequest } from "@/app/api/auth";

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within a AuthProvider");
    }

    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);

    const signup = async (user) => {
        try {
          const res = await registerRequest(user);
          console.log("authContext: ");
          console.log(res.data);
          if (res.status === 200) {
            setUser(res.data);
            setIsAuthenticated(true);
          }
        } catch (error) {
            console.log(error.response);
            setErrors(error.response.data.message);
        }
      };

      return (
        <AuthContext.Provider value={{ signup, user, isAuthenticated, errors }}>
          {children}
        </AuthContext.Provider>
      );
}