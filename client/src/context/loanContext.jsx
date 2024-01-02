"use client";

import { createContext, useContext, useState } from "react";
import { createLoanRequest, getLoansRequest, deleteLoanRequest } from "@/app/api/loans";

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

    const getLoans = async () => {
        try {
            const res = await getLoansRequest();
            console.log(res);
            setLoans(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const createLoan = async (loan) => {
        try {
            const res = await createLoanRequest(loan);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteLoan = async (id) => {
        try {
            const res = await deleteLoanRequest(id);
            if(res.status === 204) {
                setLoans(loans.filter((loan) => loan._id !== id));
            }
        } catch (error) {
            console.log(error);
        }
        
    };

    return (
        <LoanContext.Provider value={{loans, createLoan, getLoans, deleteLoan}}>
            { children }
        </LoanContext.Provider>
    )
}