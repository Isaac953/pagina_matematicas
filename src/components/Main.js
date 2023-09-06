import React from "react";
import "./Layout.scss";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Home } from "./anterior/pages/Home/Home";
import { Charts } from "./anterior/pages/Pruebas/Charts/Charts";

export const Main = () => {
  const basename = "/pagina_matematicas";
  return (
    <main>
      <Routes>
        <Route exact path="*" element={<Navigate to={basename} />}></Route>
        <Route path={basename + "/"} element={<Home />} />
        <Route path={basename + "/charts"} element={<Charts />} />
      </Routes>
      <Outlet />
    </main>
  );
};
