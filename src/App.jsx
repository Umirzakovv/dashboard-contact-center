import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/home/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
