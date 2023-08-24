import React from "react";

export const Container2 = ({ nombre, addMensaje }) => {

  return (
    <div>
      {nombre}
      <button onClick={() => addMensaje("Mensaje desde componente 2")}>Enviar mensaje</button>
    </div>
  );
};
