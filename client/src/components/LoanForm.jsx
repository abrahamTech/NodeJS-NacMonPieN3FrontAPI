import { useForm } from "react-hook-form"

function LoanForm() {

  const { register, handleSubmit } = useForm();

  const onSubmit = async (values) => {
    console.log(values);
  }

  return (
    <div className="flex justify-center items-center">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="materialId">ID del Material</label>
          <input 
            type="text" 
            placeholder="002" 
            id="materialId"
            {...register("idMaterial")} 
            autoFocus
          />
        </div>

        <div>
          <label htmlFor="materialWeight">Peso en gramos</label>
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