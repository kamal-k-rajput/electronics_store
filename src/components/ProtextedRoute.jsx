// /orders and /neworder are protected routes
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
export const ProtectedRoute = ({ children }) => {
  const { isloggedIn } = useContext(AuthContext);
  console.log(isloggedIn);
  if (!isloggedIn) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};
