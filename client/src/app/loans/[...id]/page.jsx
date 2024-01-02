"use client";

import LoanForm from '@/components/LoanForm';
import React from 'react'

const LoanId = ({ params }) => {

    console.log(params)

    return (
        <div className="flex flex-col justify-center items-center my-auto">
            <div>
                Id Loan
                <h1>ID - {params.id}</h1>
            </div>
            <LoanForm />
        </div>
    )
}

export default LoanId;