"use client";

import { useAuth } from "@/context/authContext";
import { redirect } from "next/navigation";

const ProtectedRoute = ({children}) => {
    const { user, loading,  isAuthenticated } = useAuth();

    if(loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-4xl font-bold">Loading...</h1>
            </div>
        )
    } 
    
    if(!isAuthenticated && !loading) {
        redirect("/login");
        return null;
    }

    return (
        <>{ children }</>
    )
};

export default ProtectedRoute;