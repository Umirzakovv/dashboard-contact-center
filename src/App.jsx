import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Services from "./pages/services/Services";
import LateComers from "./pages/latecomers/LateComers";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/services" element={<Services />} />
      <Route path="/latecomers" element={<LateComers />} />
    </Routes>
  );
};

export default App;
