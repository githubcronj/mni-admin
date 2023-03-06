import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const auth = useSelector((state: any) => state.auth);

  return auth.isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoutes;
