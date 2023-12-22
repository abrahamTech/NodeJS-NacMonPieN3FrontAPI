"use client";

import { useLoans } from "@/context/loanContext";
import ProtectedRoute from "@/routes";
import { useEffect } from "react";

export default function Loans() {

    const { getLoans, loans } = useLoans();

    console.log(loans);

    useEffect(() => {
        getLoans();
    }, []);

    return (
        <ProtectedRoute >
            <div className="flex flex-col items-center justify-center h-screen">
                <h1>Prestamos</h1>
                <div>
                    {
                        loans.map((loan) => (
                            <div key={loan._id}>
                                <h1>{loan.idMaterial}</h1>
                                <p>{loan.weight}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </ProtectedRoute>
    )
}