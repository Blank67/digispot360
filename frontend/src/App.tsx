import { LoginPage } from "@pages/LoginPage";
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};
