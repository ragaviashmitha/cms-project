// src/routes/AppRoutes.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

// Pages
import Home from "../pages/Home";
import Upload from "../pages/Upload";
import View from "../pages/View";
import Developer from "../pages/Developer";
import SignIn from "../pages/Login";
import SignUp from "../pages/Signup";
import AboutUs from "../pages/AboutUs";

const AppRoutes = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/developer" element={<Developer />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/aboutus" element={<AboutUs />} />

      {/* Protected Routes */}
      <Route
        path="/upload"
        element={isAuth ? <Upload /> : <Navigate to="/signin" />}
      />
      <Route
        path="/view"
        element={isAuth ? <View /> : <Navigate to="/signin" />}
      />

      {/* Catch-all for unknown routes */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
