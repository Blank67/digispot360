import { Helmet } from "react-helmet";
import { LoginComponent } from "@components/loginComponent/LoginComponent";
import { Navigate } from "react-router-dom";

export const LoginPage = () => {
  const isLogin = localStorage.getItem("login") === "true";
  if (isLogin) return <Navigate to="/dashboard" />;
  return (
    <>
      <Helmet>
        <title>Sign In</title>
        <meta name="description" content="Login to your account" />
      </Helmet>
      <LoginComponent />
    </>
  );
};
