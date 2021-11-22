import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export function PrivateRoute({ children }) {
  const [user] = useContext(UserContext);
  return user.email ? children : <Navigate to="/login" />;
}