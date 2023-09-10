import React from "react";
import "../Home/Home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa1, fa2, fa3, fa4 } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
