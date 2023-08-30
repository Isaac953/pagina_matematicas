import React, { useState } from "react";
import { Container2 } from "./Container2";

export const Container = () => {
  const [nombre, setNombre] = useState("Isaac");
  const [mensaje, setMensaje] = useState("");

  const addMensaje = (mensaje) => {
    console.log(mensaje);
    setMensaje(mensaje);
  };

  return (
    <div>
      Container
      <h1>{mensaje}</h1>
      <hr />
      <Container2 nombre={nombre} addMensaje={addMensaje} />
    </div>
  );
};
