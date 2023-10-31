import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Services from "./pages/services/Services";
import Schedule from "./pages/schedule/Schedule";
import LateComers from "./pages/latecomers/LateComers";
import SingleService from "./pages/single-service/SingleService";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/services" element={<Services />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/report-latecomers" element={<LateComers />} />
      <Route path="services/single-service/:id" element={<SingleService />} />
    </Routes>
  );
};

export default App;
