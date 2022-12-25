import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Navbar from "./components/navbar/index.js";
import NewsCard from "./components/news-card";
const RouteSwitch = () => {
  return (
    <BrowserRouter basename="/">
      <Navbar />
      <App />
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
