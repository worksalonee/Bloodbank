import React from "react";
import { Navigate } from "react-router-dom";
function PublicRoute({ children }) {
  if (localStorage.getItem("blood-token")) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}

export default PublicRoute;
