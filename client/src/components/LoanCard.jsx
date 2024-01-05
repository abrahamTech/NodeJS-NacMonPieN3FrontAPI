import Link from "next/link";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

import { useLoans } from "@/context/loanContext";

const LoanCard = ({ loan, index }) => {

    const {deleteLoan} = useLoans();

    return (
        <div className="flex flex-col gap-y-4 bg-zinc-800 w-full p-6 rounded-md min-w-[120px] max-w-[180px] md:min-w-[180px] sm:min-w-sm sm:max-w-md">
            <header className="flex flex-col justify-between gap-2 xl:flex-row">
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
                <p className="text-white">Peso en Gramos: {loan.weight}</p>
                <p className="text-zinc-400 mt-5 mb-2text-xl font-bold">Total del Prestamo: <span className="text-red-700">${loan.loanAmount}</span></p>                  
                {/* <p>{new Date(loan.date).toLocaleDateString()}</p> */}
                <p className="text-sm text-white">Cita en Sucursal: <span className="font-bold">{dayjs(loan.date).utc().format("DD/MM/YYYY")}</span></p>
                <p className="text-xs text-gray-500">Creada el  {new Date(loan.createdAt).toLocaleDateString()}</p>
            </div>
        </div>
    )
}

export default LoanCard;