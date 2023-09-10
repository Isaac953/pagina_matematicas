import React from "react";
import "./Layout.scss";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Cuadrado } from "./anterior/pages/Pruebas/Cuadrado/Cuadrado";
import { Charts } from "./anterior/pages/Pruebas/Charts/Charts";
import { Container } from "./anterior/pages/Pruebas/Container/Container";
import { Apitest } from "./anterior/pages/Pruebas/Apitest/Apitest";

export const Main = () => {
  const basename = "/pagina_matematicas";
  return (
    <main>
      <Routes>
        <Route exact path="*" element={<Navigate to={basename} />}></Route>
        <Route path={basename} element={<Home />} />
        <Route path={basename + "/cuadrado"} element={<Cuadrado />} />
        <Route path={basename + "/charts"} element={<Charts />} />
        <Route path={basename + "/container"} element={<Container />} />
        <Route path={basename + "/apitest"} element={<Apitest />} />
        {/* <Route path={basename + "/charts"} element={<Charts />} /> */}
      </Routes>
      <Outlet />
    </main>
  );
};
