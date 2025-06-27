import { CustomSidebar } from "@components/customSidebar/CustomSidebar";
import { DashboardPage } from "@pages/DashboardPage";
import { LoginPage } from "@pages/LoginPage";
import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

export const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <div className={`app-container`}>
        <CustomSidebar collapsed={collapsed} />
        <main>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/dashboard"
              element={
                <DashboardPage handleCollapsedChange={handleCollapsedChange} />
              }
            />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </main>
      </div>
    </>
  );
};
