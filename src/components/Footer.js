import React from "react";
import "./Layout.scss";

export const Footer = () => {
  const footerDescription = "Copyright © Isaac Arias 2023";

  return (
    <footer>
      <span>{footerDescription}</span>
    </footer>
  );
};
