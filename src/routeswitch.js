import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Navbar from "./components/navbar/index.js";
const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/app" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
