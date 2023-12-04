"use client";

import Link from "next/link";

export default function SignInForm() {


    const handleSubmit = async (e) => {
        e.preventDefault();

    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white shadow-xl p-5 rounded-lg border-t-4 border-red-700">
                
                <h1 className="text-xl font-bold my-4">Register</h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-2">

                    <div className="flex flex-col">
                        <label htmlFor="userName" >Full Name</label>
                        <input 
                            type="text" 
                            placeholder="Stephen Cruise" 
                            id="userName"
                            className="inputLogin"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="userEmail" >Email</label>
                        <input 
                            type="text" 
                            placeholder="iamalbert@gmail.com" 
                            id="userEmail"
                            className="inputLogin"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="userPassword" >Password</label>
                        <input 
                            type="password" 
                            placeholder="********" 
                            id="userPassword"
                            className="inputLogin"
                        />
                    </div>

                    <button className="btn-primary">Register</button>
                    
                    <div className="text-sm mt-3 text-right">
                        Already have an acount? <Link href={"/login"} className="bg-gradient-to-r from-red-500 to-red-700 bg-[length:100%_2px] bg-no-repeat bg-bottom">Log In</Link>
                    </div>

                </form>
            </div>

        </div>
    )
}