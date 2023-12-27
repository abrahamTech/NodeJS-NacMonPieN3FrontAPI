import LoanForm from '@/components/LoanForm'

function AddLoan() {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <h1 className='text-white'>Añadir Prestamo</h1>
      <LoanForm />
    </div>
  )
}

export default AddLoan