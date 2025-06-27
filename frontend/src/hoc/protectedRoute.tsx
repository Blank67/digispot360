import { CustomPageHeader } from "@components/customHeader/CustomPageHeader";
import { CustomSidebar } from "@components/customSidebar/CustomSidebar";
import { useState, type FC } from "react";
import { Navigate } from "react-router-dom";

export const protectRoute = (WrappedComponent: FC<any>) => {
  const ProtectedComponent: FC<any> = (props) => {
    const [collapsed, setCollapsed] = useState(false);

    const handleCollapsedChange = () => {
      setCollapsed(!collapsed);
    };
    
    const isLogin = localStorage.getItem("login") === "true";
    if (!isLogin) {
      return <Navigate to="/login" />;
    }
    return (
      <>
        <div className={`app-container`}>
          <CustomSidebar collapsed={collapsed} />
          <main>
            <CustomPageHeader handleCollapsedChange={handleCollapsedChange} />
            <WrappedComponent {...props} />
          </main>
        </div>
      </>
    );
  };
  return ProtectedComponent;
};
