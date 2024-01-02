"use client";

import { useAuth } from "@/context/authContext";
import Link from "next/link";

const Navbar = () => {

    const { isAuthenticated, user, logout } = useAuth();

    return (
        // <nav className="bg-zinc-700 flex justify-between py-5 px-10 rounded-b-xl">
        // <nav className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20 rounded-b-xl">
        <nav className="bg-transparent h-[100px] flex items-center justify-between rounded-b-xl px-4">
            <Link href="/" className="text-white inline-block text-[25px] font-semibold">
                Administrador de 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                    &nbsp;Prestamos
                </span>
            </Link>

            <ul className="flex gap-x-5 flex-row items-center">
                {isAuthenticated ? (
                    <>
                        <li>
                            <h1 className="text-white mb-0">Welcome <span className="font-bold">{user.username}</span></h1>
                        </li>

                        <li>
                            <Link 
                                href="/add-loan"
                                className='bg-white inline-block text-red-900 px-6 py-3 rounded hover:bg-red-800/75 hover:text-white transition-all ease-in-out duration-500'
                            >
                                Añadir Prestamo
                            </Link>
                        </li>
                    
                        <li>
                            <button 
                                // href="/"
                                onClick={() => logout()}
                                className='border border-solid border-white text-white px-6 py-3 rounded hover:bg-red-800/75 hover:text-white transition-all ease-in-out duration-500'
                            >
                                Logout
                            </button>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link 
                                href="/login"
                                className=' text-gray-300 inline-block border-2 border-gray-300 px-6 py-3 rounded mr-4 hover:py-3 hover:border-white hover:text-white transition-all ease-in-out duration-300'
                            >
                                Iniciar Sesión
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/register"
                                className='bg-white text-red-900 px-6 py-3 rounded hover:bg-red-800/75 hover:text-white transition-all ease-in-out duration-500'
                            >
                                Registrarse
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default Navbar;