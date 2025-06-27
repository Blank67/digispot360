import { CustomPageHeader } from "@components/customHeader/CustomPageHeader";
import { CustomSidebar } from "@components/customSidebar/CustomSidebar";
import { type FC } from "react";
import { Navigate } from "react-router-dom";

export const protectRoute = (WrappedComponent: FC<any>) => {
  const ProtectedComponent: FC<any> = (props) => {
    const isLogin = localStorage.getItem("login") === "true";
    if (!isLogin) {
      return <Navigate to="/login" />;
    }
    return (
      <>
        <div className={`app-container`}>
          <CustomSidebar />
          <main>
            <CustomPageHeader />
            <WrappedComponent {...props} />
          </main>
        </div>
      </>
    );
  };
  return ProtectedComponent;
};
