import LoansComp from "@/components/LoansComp";
import ProtectedRoute from "@/routes";

export default function Loans() {

    return (
        <ProtectedRoute >
            <LoansComp />
        </ProtectedRoute>
    )
}
