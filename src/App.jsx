import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Services from "./pages/services/Services";
import LateComers from "./pages/latecomers/LateComers";
import Login from "./pages/login/Login";
import { useEffect } from "react";

const App = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("dashboard_token");
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [navigate, token]);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/services" element={<Services />} />
      <Route path="/latecomers" element={<LateComers />} />
    </Routes>
  );
};

export default App;
