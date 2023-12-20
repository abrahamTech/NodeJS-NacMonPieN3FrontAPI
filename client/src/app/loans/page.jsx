import LoanForm from "@/components/LoanForm";
import ProtectedRoute from "@/routes";

export default function Loans() {

    return (
        <ProtectedRoute >
            <div className="flex items-center justify-center h-screen">
                <div>
                    Prestamos
                </div>
            </div>
        </ProtectedRoute>
    )
}