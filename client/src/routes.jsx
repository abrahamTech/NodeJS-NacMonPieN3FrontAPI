"use client";

import { useAuth } from "@/context/authContext";
import { redirect } from "next/navigation";

const ProtectedRoute = ({children}) => {
    const { isAuthenticated } = useAuth();

    if(!isAuthenticated) {
        redirect("/login");
        return null;
    }

    return (
        <>{ children }</>
    )
};

export default ProtectedRoute;