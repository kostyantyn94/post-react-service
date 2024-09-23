import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import Home from "./routes/Home.jsx";
import HomeArticles from "./routes/HomeArticles.jsx";
import NotFound from "./routes/NotFound.jsx";

import "./index.css";

import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./routes/Login.jsx";
import SignUp from "./routes/SignUp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />}>
            <Route index element={<HomeArticles />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="register" element={<SignUp />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
