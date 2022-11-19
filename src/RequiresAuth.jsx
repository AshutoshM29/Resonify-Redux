import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequiresAuth = ({ children }) => {
  const {
    user: { token },
  } = useSelector((state) => state.auth);

  const location = useLocation();

  return token ? (
    children
  ) : (
    <Navigate replace to="/login" state={{ from: location }} />
  );
};

const NoRequireAuth = ({ children }) => {
  const {
    user: { token },
  } = useSelector((state) => state.auth);

  const location = useLocation();

  return token ? <Navigate to="/" state={{ from: location }} /> : children;
};

export { RequiresAuth, NoRequireAuth };