import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Sites from "./Pages/Sites/Sites.jsx";
import Propos from "./Pages/Propos/Propos.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/portfolio/sites-prevue/booki" element={<Sites />} /> {/* Ajoutez un slash (/) au début du chemin */}
        <Route path="/portfolio/sites-prevue/sophie-bluel" element={<Sites />} />
        <Route path="/portfolio/sites-prevue/kasa" element={<Sites />} />
        <Route path="/cyberpsycho/" element={<Propos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;