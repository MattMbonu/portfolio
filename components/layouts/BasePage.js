import React from "react";
import { Container } from "reactstrap";

const BasePage = ({ children, className = "" }) => (
  <div className={`base-page ${className}`}>
    <div className="row-container">{children}</div>
  </div>
);

export default BasePage;
