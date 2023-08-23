import React from "react";
import "./Home.scss";

export const Home = () => {
  const mainTittle = "Talleres";
  const buttonTittle = "Contenido";
  let listTalleres = [
    {
      id: 0,
      title: "Figuras geométricas",
      cover: "",
      route: "",
      description: "3 Ejercicios",
    },
    // {
    //   id: 1,
    //   title: "Precios y descuentos",
    //   cover: "",
    //   route: "",
    //   description: "? Ejercicios",
    // },
    // {
    //   id: 2,
    //   title: "Promedio, moda y mediana",
    //   cover: "",
    //   route: "",
    //   description: "? Ejercicios",
    // },
    // {
    //   id: 3,
    //   title: "Analisis salarial",
    //   cover: "",
    //   route: "",
    //   description: "? Ejercicios",
    // },
  ];
  // let listTalleres = ["Figuras geométricas", "Precios y descuentos", "Promedio, moda y mediana", "Analisis salarial"];

  return (
    <section>


      <h1>{mainTittle}</h1>
      <section className="taller-grid">
        {listTalleres.map((item) => (
          <div key={item} className="taller-card">
            <figure>Logo</figure>
            <div className="taller-card__details">
              <h2>{item.title}</h2>
              <button>{buttonTittle}</button>
              <span>{item.description}</span>
            </div>
          </div>
        ))}

        {/* <ul>
          {listTalleres.map((item) => (
            <li>{item.title}</li>
          ))}
        </ul> */}
      </section>
    </section>
  );
};
