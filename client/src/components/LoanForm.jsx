"use client";

import { useLoans } from "@/context/loanContext";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form"

function LoanForm() {

  const { register, handleSubmit } = useForm();
  const { loans, createLoan } = useLoans();
  const params = useParams();

  useEffect(() => {
    if(params.id) {
      console.log(params)
    }
  }, [])

  const onSubmit = async (values) => {
    values.weight = parseFloat(values.weight);
    //console.log(values);
    createLoan(values);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="materialId" className="text-white">ID del Material</label>
          <input 
            type="text" 
            placeholder="002" 
            id="materialId"
            {...register("idMaterial")} 
            autoFocus
          />
        </div>

        <div>
          <label htmlFor="materialWeight" className="text-white">Peso en gramos</label>
          <input 
            type="text" 
            placeholder="50"
            id="materialWeight"
            {...register("weight")}
          />
        </div>

        <div className="flex justify-center items-center">
          <button className="btn-primary">Consultar</button>
        </div>
      </form>
    </div>
  )
}

export default LoanForm