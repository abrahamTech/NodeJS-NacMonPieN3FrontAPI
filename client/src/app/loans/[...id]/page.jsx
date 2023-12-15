import LoanForm from '@/components/LoanForm';
import React from 'react'

const LoanId = ({ params }) => {

    console.log(params)

    return (
        <div>
            Id Loan
            <h1>ID - {params.id}</h1>
            <LoanForm />
        </div>
    )
}

export default LoanId;