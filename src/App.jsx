import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import HomeLayout from "./layouts/HomeLayout";


const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/layout" element={<HomeLayout />} />
      </Routes>
  );
};

export default App;
