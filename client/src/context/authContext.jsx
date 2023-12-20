"use client";

import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

import { registerRequest, loginRequest, verifyTokenRequest } from "@/app/api/auth";

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
    const [loading, setLoading] = useState(true);
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

    const signin = async (user) => {
      try {
        const res = await loginRequest(user);
        if(res.status === 201) {
          console.log(res);
          setUser(res.data);
          setIsAuthenticated(true);
        }
      } catch (error) {
        setErrors(error.response.data.message);
      }
    }

    useEffect(() => {
      if(errors.length > 0) {
        const timer = setTimeout(() => {
          setErrors([]);
        }, 5000);

        return () => clearTimeout(timer);
      }
    }, [errors]);

    useEffect(() => {
      const checkLogin = async () => {

        const cookies = Cookies.get();
        console.log(cookies);

        if(!cookies.token) {
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }
        
        try {
          const res = await verifyTokenRequest(cookies.token);
          console.log(res);

          if(!res.data) return setIsAuthenticated(false);
          
          setIsAuthenticated(true);
          setUser(res.data);
          setLoading(false);
        } catch (error) {
          setIsAuthenticated(false);
          setLoading(false);
        }
    
      };

      checkLogin();

    }, []);
      
      return (
        <AuthContext.Provider value={{ signup, signin, user, loading, isAuthenticated, errors }}>
        {children}
      </AuthContext.Provider>
    );
}