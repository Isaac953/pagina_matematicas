import React, { useState, useEffect } from "react";
import "./Pages.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa1, fa2, fa3, fa4 } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, Link } from "react-router-dom";

export const Home = () => {
  const mainTittle = "Talleres realizados";
  const buttonTittle = "Contenido";
  const baseName = "/pagina_matematicas";

  let listTalleres = [
    {
      id: 0,
      title: "Figuras geométricas",
      cover: fa1,
      route: "/cuadrado",
      description: "3 Ejercicios",
    },
    {
      id: 1,
      title: "Precios y descuentos",
      cover: fa2,
      route: "/charts",
      description: "? Ejercicios",
    },
    {
      id: 2,
      title: "Promedio, moda y mediana",
      cover: fa3,
      route: "/container",
      description: "? Ejercicios",
    },
    {
      id: 3,
      title: "Analisis salarial",
      cover: fa4,
      route: "/apitest",
      description: "? Ejercicios",
    },
  ];

  // const navigate = useNavigate();
  // const handleClick = (route) => navigate(route, { replace: true });

  let handleClick = () => {
    useEffect = () => {
      console.log("Se hizo click");
    };
  };

  //   useEffect(() => {
  // });

  // useEffect(() => {
  //   navigate.push(route);
  // });

  // useEffect((route) => {
  //   navigate.current.navigate(route);
  // });

  // // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   document.title = `You clicked ${count} times`;
  // });

  return (
    <section className="home">
      <h1>{mainTittle}</h1>
      <section className="home__grid">
        {listTalleres.map((item) => (
          <div key={item.id} className="home__grid--card">
            <span>
              <FontAwesomeIcon icon={item.cover} className="card__icon" />
            </span>
            <div className="card__details">
              <h3>{item.title}</h3>
              <Link to={baseName + item.route}>
                <button className="btn-content">{buttonTittle}</button>
              </Link>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};
