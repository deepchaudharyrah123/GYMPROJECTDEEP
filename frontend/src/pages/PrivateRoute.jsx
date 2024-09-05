import React from "react";
import { useAuth } from "../contexts/AuthContext";
import Login from "./Login";

const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Login />;
};

export default PrivateRoute;
