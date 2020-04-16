import React from "react";
// import Auth from '../../utils/Auth';
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, path, ...rest }) => {
  const isAuthenticated = localStorage.getItem("token") ? true : false;
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          path.split("/")[1] === "resetPassword" ||
          path.split("/")[1] === "forgetPassword" ? (
            <Redirect to="/" />
          ) : (
            <Component {...props} />
          )
        ) : path.split("/")[1] === "resetPassword" ||
          path.split("/")[1] === "forgetPassword" ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
};
