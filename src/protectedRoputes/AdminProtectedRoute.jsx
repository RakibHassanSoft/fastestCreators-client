import { Navigate } from "react-router-dom";
import useAdmin from "../hook/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminProtectedRoute = ({ children }) => {
    const { user, loading: authLoading } = useAuth();
    const { data, loading, isError ,error} = useAdmin();

    
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-xl font-semibold text-blue-600">
          Loading data, please wait
        </h1>
      </div>
    );
  }

  
    if (!user) {
      return <Navigate to="/login" replace />;
    }
    if (!data?.data?.role==='admin') {
      return <Navigate to="/dashboard" replace />;
    }
  
    // if (isError || !data.data.role ==="admin") {
    //   return <Navigate to="/" replace />;
    // }
  
    return children;
  };
  

export default AdminProtectedRoute;