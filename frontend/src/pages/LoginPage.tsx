import { Helmet } from "react-helmet";
import { LoginComponent } from "@components/loginComponent/LoginComponent";

export const LoginPage = () => {
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
