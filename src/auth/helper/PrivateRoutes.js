import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from ".";

const PrivateRoutes = ({ children, ...rest }) => {
  return (
    <>
      {isAuthenticated() ? children : (
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

export default PrivateRoutes;
