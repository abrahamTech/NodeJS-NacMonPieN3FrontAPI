import LoanForm from '@/components/LoanForm'
import ProtectedRoute from '@/routes'

function AddLoan() {
  return (
    <ProtectedRoute>
      <div className='flex flex-col items-center justify-center my-auto'>
        <h1 className='text-white'>Añadir Prestamo</h1>
        <LoanForm />
      </div>
    </ProtectedRoute>
  )
}

export default AddLoan