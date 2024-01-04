"use client";

import { useLoans } from "@/context/loanContext";
import { useEffect } from "react";
import LoanCard from "./LoanCard";

const LoansComp = () => {

    const { getLoans, loans } = useLoans();

    useEffect( ()=> {
        getLoans();
    }, []);

    if(loans.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <h1>No hay Prestamos</h1>
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-white my-4">Prestamos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 w-4/5 mb-4">
                {
                    loans.map((loan, index) => (
                        <LoanCard loan={loan} index={index} key={loan._id} />
                    ))
                }
            </div>
        </div>
    )
}

export default LoansComp;