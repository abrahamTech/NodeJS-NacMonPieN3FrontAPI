"use client";

import LoanForm from '@/components/LoanForm';
import React from 'react'

const LoanId = ({ params }) => {

    console.log(params)

    return (
        <div className="flex justify-center items-center h-screen flex-col">
            <div>
                Id Loan
                <h1>ID - {params.id}</h1>
            </div>
            <LoanForm />
        </div>
    )
}

export default LoanId;