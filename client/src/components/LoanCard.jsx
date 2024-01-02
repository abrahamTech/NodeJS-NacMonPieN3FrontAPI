const LoanCard = ({ loan, index }) => {
    return (
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md ">
            <h1 className="text-white">Prestamo No. {index + 1}</h1>
            <p className="text-white">ID del Material: {loan.idMaterial}</p>
            <p className="text-xl">Peso en Gramos: {loan.weight}</p>
            <p className="text-2xl font-bold">Total del Prestamo: <span className="text-red-700">${loan.loanAmount}</span></p>                  
            <p>{new Date(loan.date).toLocaleDateString()}</p>
        </div>
    )
}

export default LoanCard;