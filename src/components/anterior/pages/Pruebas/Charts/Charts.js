import React, {useState} from "react";
import "./Charts.scss";

export const Charts = () => {
  let listPersonas = [
    {
      name: "Jose",
      group: 1,
    },
    {
      name: "Ingrid",
      group: 2,
    },
    {
      name: "Diana",
      group: 1,
    },
    {
      name: "Eduardo",
      group: 3,
    },
    {
      name: "Fernanda",
      group: 2,
    },
    {
      name: "Daniel",
      group: 1,
    },
  ];

  let listPersonasFilter = [];

  // listPersonas.unshift({id: indexOf});

  //   const result = listPersonas.filter((pr) => pr.group === 3);

  const [setGrupo] = useState();

  const buscarGrupo = (nuevoGrupo) => {

    // console.log(nuevoGrupo);
    listPersonasFilter = listPersonas.filter((pr) => pr.group === parseInt(nuevoGrupo));
    setGrupo(listPersonasFilter);
    
    console.log(listPersonasFilter);
    // listPersonas.filter((pr) => pr.group === nuevoGrupo);
}

  // for (let i = 0; i < listPersonas.length; i++) {
  //   const result = listPersonas.filter((pr) => pr.group === i);
  //   console.log(result);
  // }

  // const result = listPersonas.forEach((pr) => console.log(listPersonas));

  return (
    <div className="datos__charts">
      <h1>Analisis de datos</h1>

      <div className="datos__charts--data">
        <label>Grupo: </label>
        <input
          type="number"
          placeholder="número de grupo"
          // onChange={e => perimetroCuadrado(e.target.value)}
          id="grupoI"
        />
        <button className="btn-fig" onClick={(e) =>
            buscarGrupo(document.getElementById("grupoI").value)}>Buscar</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Group</th>
          </tr>
        </thead>
        <tbody>
          {listPersonasFilter.map((usr) => {
            return (
              <tr key={usr.indexOf}>
                <td>{usr.indexOf}</td>
                <td>{usr.name}</td>
                <td>{usr.group}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
