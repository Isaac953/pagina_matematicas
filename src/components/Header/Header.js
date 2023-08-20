import React from "react";
import "./Header.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
  const titleHeader = "Página web de matemáticas";

  return (
    <header>
      <h1><FontAwesomeIcon icon={faCalculator} className="logo" />{titleHeader}</h1>
    </header>
  );
};
