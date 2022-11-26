import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Lodging from "./pages/Lodging";
import NotFound from "./pages/NotFound";
import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";

const App = () => {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/kasa/" element={<Home />} />
          <Route path="/lodging/:itemId" element={<Lodging />} />
          <Route path="/about" element={<About />} />
          <Route path="/no-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/no-found" replace />} />
        </Routes>
      </main>
      <MainFooter />
    </div>
  );
};

export default App;
