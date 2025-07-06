import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../../services/authServices";

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/" />;
};

export default PrivateRoute;
