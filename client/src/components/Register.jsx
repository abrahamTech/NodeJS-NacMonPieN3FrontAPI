"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { registerRequest } from "@/app/api/auth";
import { useForm } from "react-hook-form";
import { useAuth } from "@/context/authContext";
import { redirect } from "next/navigation";

export default function SignInForm() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signup, user, isAuthenticated, errors: registerErrors } = useAuth();

    useEffect(() => {
        if(isAuthenticated) {
            redirect("/loans");
        }
    }, [isAuthenticated]);

    console.log("Register: ");
    console.log(user);
    console.log(errors);

    const onSubmit = async (values) => {
        await signup(values);
    }


    return (
        <div className="flex items-center justify-center">
            <div className="bg-white shadow-xl p-5 rounded-lg border-t-4 border-red-700">
                
                <h1 className="text-xl font-bold my-4">Register</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">

                    <div className="flex flex-col">
                        <label htmlFor="userName" >User Name</label>
                        <input 
                            type="text" 
                            placeholder="StephenCruise01" 
                            id="userName"
                            className="inputLogin"
                            // onChange={e => setUsername(e.target.value)}
                            {...register("username", { required: "Ingresa un nombre de usuario" })}
                        />
                    </div>

                    {errors.username && (
                        <div className="bg-red-700 text-white w-fit text-sm py-1 px-3 rounded-md mt-[-10px]">
                            {errors.username.message}
                        </div>
                    )}

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

                </form>

                <div className="mt-3">
                    {
                        registerErrors.map((error, i) => (
                            <div className="bg-red-700 text-white w-fit text-sm py-1 px-3 rounded-md mb-2" key={i}>
                                {error}
                            </div>
                        ))
                    }
                </div>
                    
                <div className="text-sm mt-4 text-right">
                    ¿Ya tienes una cuenta? <Link href={"/login"} className="bg-gradient-to-r from-red-500 to-red-700 bg-[length:100%_2px] bg-no-repeat bg-bottom">Log In</Link>
                </div>

            </div>

        </div>
    )
}