import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const location = useLocation();
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  if (!token) {
    return <Navigate to="/signin" replace state={{ from: location }} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;



