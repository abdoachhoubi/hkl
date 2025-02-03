import React from "react";
import { BackgroundLines, Menu } from "./components/ui";
import { MenuItem } from "./components/ui/navbar-menu";
import bg from "@/assets/engine-bg.jpg";
import { Route, Routes } from "react-router-dom";
import { About, Dashboard, Home } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;
