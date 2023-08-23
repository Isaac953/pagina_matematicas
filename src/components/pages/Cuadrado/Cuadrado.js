import React, { useState } from "react";
import "./Cuadrado.scss";
import { LineChart } from "./LineChart";

export const Cuadrado = () => {
  const mainTittle = "Ejercicio 1 - Perimetro Cuadrado";

  const [perimetro, setPerimetro] = useState(0);
  // let resultado = 0;

  const perimetroCuadrado = (perimetro) => {
    setPerimetro(perimetro * 4);
  };

  return (
    <section>
      <h1>{mainTittle}</h1>
      <div className="cuadrado">
        <label>Ingresar la medida del lado</label>
        <input
          type="number"
          placeholder="lado"
          // onChange={e => perimetroCuadrado(e.target.value)}
          id="perimetroI"
        />
        <button
          className="btn-fig"
          onClick={(e) =>
            perimetroCuadrado(document.getElementById("perimetroI").value)
          }
        >
          Perimetro
        </button>
        {/* <button
          onClick={(e) => {
            console.log("El valor guardado en tu estado es: ", nombre);
          }}
        >
          Mostrar valor de estado
        </button> */}
        <label>
          Resultado es: <span>{perimetro} cm</span>
        </label>
      </div>
      <div className="chart">
        <h3>Grafico lineal</h3>
        <input
          type="number"
          placeholder="Escriba un número"
          id="itemCharts"
        />
        <button
          className="btn-fig"
          onClick={(e) =>
            perimetroCuadrado(document.getElementById("perimetroI").value)
          }
        >Generar tendencia</button>
        <LineChart></LineChart>
      </div>
    </section>
  );
};
