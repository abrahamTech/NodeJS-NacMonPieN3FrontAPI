import Link from "next/link";

export default function Header() {
    return(
        <header className="bg-red-900 p-4 text-white flex justify-between items-center">
            <div className="text-xl font-bold">
                Nacional Monte de Piedad
            </div>
            <nav>
            <Link href="/login" className="text-white mr-4">
                Iniciar Sesión
            </Link>
            <Link href="/register" className="text-white">
                Registrarse
            </Link>
            </nav>
        </header>
    )
}