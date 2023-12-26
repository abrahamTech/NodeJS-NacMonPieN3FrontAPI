import Header from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';

import logo from '@/img/logoMonte.png';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
      <main className='h-screen flex flex-col items-center justify-center '>
        <Image 
          src={logo}
          alt="Nacional Monte de Piedad Logo"
          width={600}
          className="mb-16 h-auto"
          />

        <h1 className="text-4xl font-bold mb-4 text-white">Bienvenido</h1>
        <div className="flex justify-center">
          <Link href="/login" className='bg-red-900 text-white px-6 py-3 rounded mr-4 hover:bg-red-800/75 transition-all ease-in-out duration-500'>
            Iniciar Sesión
          </Link>
          <Link href="/register" className='bg-white text-red-900 px-6 py-3 rounded hover:bg-red-800/75 hover:text-white transition-all ease-in-out duration-500'>
            Registrarse
          </Link>
        </div>
      </main>
  )
}
