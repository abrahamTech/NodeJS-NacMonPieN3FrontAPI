"use client";

import { useForm } from "react-hook-form";
import { useAuth } from "@/context/authContext";

import Link from "next/link";

export default function LogIn() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signin, errors: loginErrors } = useAuth(); 

    const onSubmit = async (values) => {
        await signin(values);
    }

    return (
        <div className="flex">
            <div className="bg-white shadow-xl p-5 rounded-lg border-t-4 border-red-700">
                
                <h1 className="text-xl font-bold my-4">Login</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">

                    <div className="flex flex-col">
                        <label htmlFor="userEmail" >Email</label>
                        <input 
                            type="text" 
                            placeholder="iamalbert@gmail.com" 
                            id="userEmail"
                            className="inputLogin"
                            // onChange={e => setEmail(e.target.value)}
                            {...register("email", { required: "Ingresa un email" })}
                        />
                    </div>

                    {errors.email && (
                        <div className="bg-red-700 text-white w-fit text-sm py-1 px-3 rounded-md mt-[-10px]">
                            {errors.email.message}
                        </div>
                    )}

                    <div className="flex flex-col">
                        <label htmlFor="userPassword" >Password</label>
                        <input 
                            type="password" 
                            placeholder="********" 
                            id="userPassword"
                            className="inputLogin"
                            // onChange={e => setPassword(e.target.value)}
                            {...register("password", { required: "Ingresa una contraseña" })}
                        />
                    </div>

                    {errors.password && (
                        <div className="bg-red-700 text-white w-fit text-sm py-1 px-3 rounded-md mt-[-10px] mb-2">
                            {errors.password.message}
                        </div>
                    )}

                    <button className="btn-primary">Register</button>

                    <div className="mt-3">
                        {
                            loginErrors.map((error, i) => (
                                <div className="bg-red-700 text-white w-fit text-sm py-1 px-3 rounded-md mb-2" key={i}>
                                    {error}
                                </div>
                            ))
                        }
                    </div>
                    
                    <div className="text-sm mt-3 text-right">
                        ¿No tienes una cuenta? <Link href={"/register"} className="bg-gradient-to-r from-red-500 to-red-700 bg-[length:100%_2px] bg-no-repeat bg-bottom">Registrarse</Link>
                    </div>

                </form>
            </div>
        </div>
    )
}