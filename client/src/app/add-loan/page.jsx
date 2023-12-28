import LoanForm from '@/components/LoanForm'
import ProtectedRoute from '@/routes'

function AddLoan() {
  return (
    <ProtectedRoute>
      <div className='h-screen flex flex-col items-center justify-center'>
        <h1 className='text-white'>Añadir Prestamo</h1>
        <LoanForm />
      </div>
    </ProtectedRoute>
  )
}

export default AddLoan