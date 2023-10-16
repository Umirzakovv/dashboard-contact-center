import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
