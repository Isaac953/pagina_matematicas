import React from "react";
import "./Home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa1 } from "@fortawesome/free-solid-svg-icons";
import { fa2 } from "@fortawesome/free-solid-svg-icons";
import { fa3 } from "@fortawesome/free-solid-svg-icons";
import { fa4 } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  const mainTittle = "Talleres realizados";
  // const buttonTittle = "Contenido";
  let listTalleres = [
    {
      id: 0,
      title: "Figuras geométricas",
      cover: fa1,
      route: "",
      description: "3 Ejercicios",
    },
    {
      id: 1,
      title: "Precios y descuentos",
      cover: fa2,
      route: "",
      description: "? Ejercicios",
    },
    {
      id: 2,
      title: "Promedio, moda y mediana",
      cover: fa3,
      route: "",
      description: "? Ejercicios",
    },
    {
      id: 3,
      title: "Analisis salarial",
      cover: fa4,
      route: "",
      description: "? Ejercicios",
    },
  ];
  // let listTalleres = ["Figuras geométricas", "Precios y descuentos", "Promedio, moda y mediana", "Analisis salarial"];

  return (
    <section className="home">
      <h1>{mainTittle}</h1>
      <section className="home__grid">
        {listTalleres.map((item) => (
          <div key={item.id} className="home__grid--card">
            <figure><FontAwesomeIcon icon={item.cover} className="card__icon" /></figure>
            <div className="card__details">
              <h2>{item.title}</h2>
              {/* <button>{buttonTittle}</button>
              <span>{item.description}</span> */}
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};
