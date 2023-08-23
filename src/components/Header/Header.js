import React from "react";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Header = () => {
  const titleHeader = "Página web de matemáticas";

  return (
    <header>
      <h1>
        <FontAwesomeIcon icon={faCalculator} className="logo" />
        {titleHeader}
      </h1>

      <nav>
        <ul>
          <li>
            <Link to="/cuadrado">Cuadrado</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
