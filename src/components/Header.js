import React from "react";
import "./Layout.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Header = () => {
  const titleHeader = "Página web de matemáticas";

  return (
    <header>
      <h1>
        <Link to="/">
          <FontAwesomeIcon icon={faCalculator} className="logo" />
          {titleHeader}
        </Link>
      </h1>
    </header>
  );
};
