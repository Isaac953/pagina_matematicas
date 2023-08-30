import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./Layout.scss";
import { Home } from "./Home/Home";

export const Layout = () => {
  return (
    <main>
      <Routes>
        <Route exact path="*" element={<Navigate to="/home" />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </main>
  );
};
