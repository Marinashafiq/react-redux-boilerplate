import React from "react";

export const Home = React.lazy(() => import('../containers/Home/Home'));
export const Login = React.lazy(() => import('../containers/Auth/Login/Login'));
export const NotFound = React.lazy(() => import('../components/NotFound/NotFound'));
