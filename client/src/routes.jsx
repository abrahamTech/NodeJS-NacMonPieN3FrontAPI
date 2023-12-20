"use client";

import { useAuth } from "@/context/authContext";
import { redirect } from "next/navigation";

const ProtectedRoute = ({children}) => {
    const { user, loading,  isAuthenticated } = useAuth();

    if(loading) return <h1>Loading...</h1>
    
    if(!isAuthenticated && !loading) {
        redirect("/login");
        return null;
    }

    return (
        <>{ children }</>
    )
};

export default ProtectedRoute;