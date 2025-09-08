
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from "@pages/landing-page";
import LoginPage from "@pages/auth/login";
import Dashboard from "@pages/dashboard";
import GererActualites from "@pages/Gestions/actualites";
import GererBarcaMercato from "../../features/pages/Gestions/mercato";
import GererClassementLaLiga from "../../features/pages/Gestions/classementLaliga";
import GererClassementUEFA from "../../features/pages/Gestions/classementUefa";
import ConfigAdsense from "../../features/pages/config/adsenses";
const AppRoutes = () => {
  return (
  
      <Routes>
      <Route path="/" element={<LandingPage />} />
    <Route path="/connexion" element={<LoginPage />} />
     <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/actualites" element={<GererActualites />} />
          <Route path="/classement-laliga" element={<GererClassementLaLiga />} />
        <Route path="/classement-uefa" element={<GererClassementUEFA />} />
        <Route path="/barca-mercato" element={<GererBarcaMercato />} />
        <Route path="/config-adsense" element={<ConfigAdsense />} />
    </Routes>
  );
};

export default AppRoutes;
