import Link from "next/link";

import { useLoans } from "@/context/loanContext";

const LoanCard = ({ loan, index }) => {

    const {deleteLoan} = useLoans();

    return (
        <div className="flex flex-col gap-y-2 bg-zinc-800 max-w-md min-w-[320px] w-full p-6 rounded-md">
            <header className="flex justify-between gap-2">
                <p className="text-white text-2xl">Prestamo No. {index + 1}</p>
                <div className="flex items-center gap-x-2">
                    {/* <button>Editar</button> */}
                    <button
                        onClick={() => {
                            deleteLoan(loan._id)
                        }}
                        className="bg-red-700 px-2 py-1 rounded-md text-white text-sm"
                    >
                        Eliminar
                    </button>

                    <Link href={`/loans/${loan._id}`} className="bg-white px-2 py-1 rounded-md text-red-800 font-light text-sm">Editar</Link>
                    {/* <Link href={`/loans/${loan._id}`} className="flex items-center justify-center text-white">Editar</Link> */}
                </div>
            </header>
            <div>
                <p className="text-white">ID del Material: {loan.idMaterial}</p>
                <p className="text-xl">Peso en Gramos: {loan.weight}</p>
                <p className="text-xl font-bold">Total del Prestamo: <span className="text-red-700">${loan.loanAmount}</span></p>                  
                <p>{new Date(loan.date).toLocaleDateString()}</p>
            </div>
        </div>
    )
}

export default LoanCard;