import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Services from "./pages/services/Services";
import Schedule from "./pages/schedule/Schedule";
import LateComers from "./pages/latecomers/LateComers";
import SingleService from "./pages/single-service/SingleService";
import StatEmployees from "./pages/stat-employees/StatEmployees";
import SingleSchedule from "./pages/single-schedule/SingleSchedule";
import DatabaseOperators from "./pages/database-operators/DatabaseOperators";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/services" element={<Services />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/statistics-employees" element={<StatEmployees />} />
      <Route path="/report-latecomers" element={<LateComers />} />
      <Route path="/services/single-service/:id" element={<SingleService />} />
      <Route path="/schedule/1000" element={<SingleSchedule />} />
      <Route path="/database-operators" element={<DatabaseOperators />}/>
    </Routes>
  );
};

export default App;
