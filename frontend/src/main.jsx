import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import Home from "./routes/Home.jsx";
import HomeArticles from "./routes/HomeArticles.jsx";

import "./index.css";

import { HashRouter, Route, Routes } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />}>
            <Route index element={<HomeArticles />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);
