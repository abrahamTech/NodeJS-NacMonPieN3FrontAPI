"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { registerRequest } from "@/app/api/auth";
import { useForm } from "react-hook-form";
import { useAuth } from "@/context/authContext";
import { redirect } from "next/navigation";

export default function SignInForm() {

    const { register, handleSubmit } = useForm();
    const { signup, user, isAuthenticated } = useAuth();

    useEffect(() => {
        if(isAuthenticated) {
            redirect("/loans");
        }
    }, [isAuthenticated]);

    console.log("Register: ");
    console.log(user);

    // const [username, setUsername] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // const handleSubmit2 = async (e) => {
    //     e.preventDefault();

    //     if(!username || !email || !password) {
    //         setError("Todos los campos son necesarios");
    //         return;
    //     }

    //     const values = {
    //         email, password, username
    //     }

    //     const res = await registerRequest(values)
    // };

    const onSubmit = async (values) => {
        await signup(values);
    }


    return (
        <div className="flex items-center justify-center h-screen">
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
                            {...register("username")}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="userEmail" >Email</label>
                        <input 
                            type="text" 
                            placeholder="iamalbert@gmail.com" 
                            id="userEmail"
                            className="inputLogin"
                            // onChange={e => setEmail(e.target.value)}
                            {...register("email")}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="userPassword" >Password</label>
                        <input 
                            type="password" 
                            placeholder="********" 
                            id="userPassword"
                            className="inputLogin"
                            // onChange={e => setPassword(e.target.value)}
                            {...register("password")}
                        />
                    </div>

                    <button className="btn-primary">Register</button>

                    {error && (
                        <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                            Error message: {error}
                        </div>
                    )}
                    
                    <div className="text-sm mt-3 text-right">
                        Already have an acount? <Link href={"/login"} className="bg-gradient-to-r from-red-500 to-red-700 bg-[length:100%_2px] bg-no-repeat bg-bottom">Log In</Link>
                    </div>

                </form>
            </div>

        </div>
    )
}