"use client";

import { createContext, useContext, useState } from "react";
import { createLoanRequest } from "@/app/api/loans";

const LoanContext = createContext();

export const useLoans = () => {
    const context = useContext(LoanContext);

    if(!context) {
        throw new Error("useLoans must be used witthin a LoanProvider");
    }

    return context;
};

export const LoanProvider = ({ children }) => {

    const [loans, setLoans] = useState([]);

    const createLoan = async (loan) => {
        try {
            const res = await createLoanRequest(loan);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <LoanContext.Provider value={{loans, createLoan}}>
            { children }
        </LoanContext.Provider>
    )
}