import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-zinc-700 flex justify-between py-5 px-10 rounded-b-xl">
            <Link href="/">Administrador de <span className="text-white">Prestamos</span></Link>
            <ul className="flex gap-x-5">
                <li>
                    <Link href="/login">Login</Link>
                </li>
                <li>
                    <Link href="/register">Register</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;