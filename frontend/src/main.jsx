import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AuthProvider from "./context/AuthContext.jsx";

import App from "./App.jsx";
import Home from "./routes/Home.jsx";
import HomeArticles from "./routes/HomeArticles.jsx";
import NotFound from "./routes/NotFound.jsx";
import Login from "./routes/Login.jsx";
import SignUp from "./routes/SignUp.jsx";
import Settings from "./routes/Settings.jsx";
import Profile from "./routes/Profile/Profile.jsx";

import "./index.css";

import { HashRouter, Route, Routes } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <AuthProvider>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Home />}>
              <Route index element={<HomeArticles />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<SignUp />} />
            <Route path="settings" element={<Settings />} />
            <Route path="profile/:username" element={<Profile />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </HashRouter>
  </StrictMode>
);
