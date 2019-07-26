import React from "react";

const BasePage = ({ children, className = "", title }) => (
  <div className={`base-page ${className}`}>
    <div className="row-container">
      {title && (
        <div className="page-header">
          <h1 className="page-header-title">{title}</h1>
        </div>
      )}
      {children}
    </div>
  </div>
);

export default BasePage;
