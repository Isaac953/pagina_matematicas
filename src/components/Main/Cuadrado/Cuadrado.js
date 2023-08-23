import React, { useState } from "react";
import "./Cuadrado.scss";

export const Cuadrado = () => {
  const mainTittle = "Ejercicio 1 - Cuadrado";

  const [perimetro, setPerimetro] = useState(0);
  // let resultado = 0;

const perimetroCuadrado = (perimetro) => {
  setPerimetro(perimetro * 4);
}

  return (
    <main>
      <h1>{mainTittle}</h1>
      <div className="cuadrado">
        <label>Ingresar la medida del lado</label>
        <input
          type="text"
          placeholder="lado"
          // onChange={e => perimetroCuadrado(e.target.value)}
          id="perimetroI"
        />
        <button onClick={ e => perimetroCuadrado(document.getElementById("perimetroI").value)}>
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
    </main>
  );
};
