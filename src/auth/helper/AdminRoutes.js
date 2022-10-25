import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from ".";

const AdminRoute = ({ children, ...rest }) => {
  return (
    <>
      {isAuthenticated()?.user?.role === 1 ? 
        children
      : (
        <Navigate
          to={{
            pathname: "/signin",
            // state: { from: props.location },
          }}
        />
      )}
    </>
  );
};

export default AdminRoute;
