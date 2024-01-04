"use client";

import LoanForm from '@/components/LoanForm';
import React from 'react'

const LoanId = ({ params }) => {

    console.log(params)

    return (
        <div className="flex flex-col justify-center items-center my-auto">
            <div>
                <h1 className='text-red-900'>ID del prestamo - {params.id}</h1>
            </div>
            <LoanForm />
        </div>
    )
}

export default LoanId;