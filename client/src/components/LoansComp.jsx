"use client";

import { useLoans } from "@/context/loanContext";
import { useEffect } from "react";

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
    )
}

export default LoansComp;