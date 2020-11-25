import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Auth from "../utils/Auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const {
    lang,
  } = useSelector((state) => state);

  console.log(Auth.isAuth())
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={props =>
        Auth.isAuth() ? <Component {...props} /> : <Redirect to={`/${lang}/login`} />
      }
    />
  );
};

export default PrivateRoute;
