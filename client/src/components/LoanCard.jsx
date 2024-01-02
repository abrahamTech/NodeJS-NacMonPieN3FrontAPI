import { useLoans } from "@/context/loanContext";

const LoanCard = ({ loan, index }) => {

    const {deleteLoan} = useLoans();

    return (
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md ">
            <header className="flex justify-between">
                <p className="text-white text-2xl">Prestamo No. {index + 1}</p>
                <div className="flex gap-x-2">
                    {/* <button>Editar</button> */}
                    <button
                        onClick={() => {
                            deleteLoan(loan._id)
                        }}
                    >
                        Delete
                    </button>
                </div>
            </header>
            <p className="text-white">ID del Material: {loan.idMaterial}</p>
            <p className="text-xl">Peso en Gramos: {loan.weight}</p>
            <p className="text-xl font-bold">Total del Prestamo: <span className="text-red-700">${loan.loanAmount}</span></p>                  
            <p>{new Date(loan.date).toLocaleDateString()}</p>
        </div>
    )
}

export default LoanCard;