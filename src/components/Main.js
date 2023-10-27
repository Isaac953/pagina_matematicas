import React from "react";
import "./Layout.scss";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Taller1 } from "./pages/Taller1/Taller1";
import { Taller2 } from "./pages/Taller2/Taller2";
import { Taller3 } from "./pages/Taller3/Taller3";
import { Taller4 } from "./pages/Taller4/Taller4";

export const Main = () => {
  const basename = "/pagina_matematicas";
  return (
    <main>
      <Routes>
        <Route exact path="*" element={<Navigate to={basename} />}></Route>
        <Route path={basename} element={<Home />} />
        <Route path={basename + "/taller1"} element={<Taller1 />} />
        <Route path={basename + "/taller2"} element={<Taller2 />} />
        <Route path={basename + "/taller3"} element={<Taller3 />} />
        <Route path={basename + "/taller4"} element={<Taller4 />} />
        {/* <Route path={basename + "/taller1"} element={<Taller1 />} />
        <Route path={basename + "/cuadrado"} element={<Cuadrado />} />
        <Route path={basename + "/charts"} element={<Charts />} />
        <Route path={basename + "/container"} element={<Container />} />
        <Route path={basename + "/apitest"} element={<Apitest />} /> */}
        {/* <Route path={basename + "/charts"} element={<Charts />} /> */}
      </Routes>
      <Outlet />
    </main>
  );
};
