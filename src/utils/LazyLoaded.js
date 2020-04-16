import React from "react";

export const Home = React.lazy(() => import('../containers/Home/Home'));
export const Signup = React.lazy(() => import('../containers/Auth/Signup/Signup'));
export const SignupSuccess = React.lazy(() => import('../containers/Auth/Success/Success'));
export const ResetPassword = React.lazy(() => import('../containers/Auth/ResetPassword/ResetPassword'));
export const ForgetPassword = React.lazy(() => import('../containers/Auth/ForgetPassword/ForgetPassword'));
export const Login = React.lazy(() => import('../containers/Auth/Login/Login'));
export const NotFound = React.lazy(() => import('../components/NotFound/NotFound'));
export const VacancyInner = React.lazy(() => import('../containers/VacancyInner/VacancyInner'));
export const ScreeningQuestions = React.lazy(() => import('../containers/ScreeningQuestions/ScreeningQuestions'));
export const Profile = React.lazy(() => import('../containers/Profile/Profile'));
export const MyApplications = React.lazy(() => import('../containers/MyApplications/MyApplications'));
