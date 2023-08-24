import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./Layout.scss";
import { Home } from "./Home/Home";
import { Cuadrado } from "./Cuadrado/Cuadrado";
import { Apitest } from "./Apitest/Apitest"
import { Container } from "./Container/Container";

export const Layout = () => {
  return (
    <main>
      <Routes>
        <Route path="*" element={<Navigate to="/cuadrado" />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/cuadrado" element={<Cuadrado />}></Route>
        <Route path="/apitest" element={<Apitest />}></Route>
        <Route path="/container" element={<Container />}></Route>
      </Routes>
    </main>
  );
};
