import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Alrashid from "./pages/Alrashid";
import Youtube from "./pages/Youtube";
import Sabzavotlar from "./pages/Sabzavotlar";
import Loru from "./pages/Loru";
import Travel from "./pages/Travel";
import Medical from "./pages/Medical";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/alrashid" element={<Alrashid />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/sabzavotlar" element={<Sabzavotlar />} />
        <Route path="/loru" element={<Loru />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/medical" element={<Medical />} />
      </Routes>

    </BrowserRouter>

  </React.StrictMode>
);
