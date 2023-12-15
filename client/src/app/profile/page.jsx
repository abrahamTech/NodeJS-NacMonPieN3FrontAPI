import ProfileComp from "@/components/ProfileComp";
import ProtectedRoute from "@/routes";

function Profile() {
  return (
    <ProtectedRoute>
        <div>
            Profile
            <ProfileComp />
        </div>
    </ProtectedRoute>
  )
}

export default Profile;