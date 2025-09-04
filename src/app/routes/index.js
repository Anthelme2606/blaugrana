
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from "@pages/landing-page";

const AppRoutes = () => {
  return (
  
      <Routes>
      <Route path="/" element={<LandingPage />} />
    
    </Routes>
  );
};

export default AppRoutes;
