"use client";

import { useLoans } from "@/context/loanContext";
import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function LoanForm() {

  const { register, handleSubmit, setValue } = useForm();
  const { loans, createLoan, getLoan, updateLoan } = useLoans();
  const params = useParams();
  const router = useRouter();

  useEffect(() => {

    const loadLoan = async () => {

      if(params.id) {
        // console.log(params)
        const loan = await getLoan(params.id);
        console.log(loan);
        setValue("idMaterial", loan.idMaterial);
        setValue("weight", loan.weight);
        setValue("date", dayjs(loan.date).utc().format("YYYY-MM-DD"));
      }
    }

    loadLoan();
  }, [])

  const onSubmit = async (values) => {
    try {
      values.weight = parseFloat(values.weight);

      const valuesValid = {
        ...values,
        date: values.date ? dayjs.utc(values.date).format() : dayjs.utc().format(), 
      }
      
      if(params.id) {
        //Editando
        
        // values.weight = parseFloat(values.weight);
        // updateLoan(params.id, values);
        updateLoan(params.id, valuesValid);
      } else {
        //Creando
        
        // values.weight = parseFloat(values.weight);
        //console.log(values);
        // createLoan(values);
        createLoan(valuesValid);
      }

      router.push("/loans");
    } catch (error) {
      console.log(error);
    }
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

        <div>
          <label htmlFor="visitShop" className="text-white">Fecha Cita Sucursal</label>
          <input 
            type="date" 
            id="visitShop"
            {...register("date")}
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