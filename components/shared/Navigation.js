import React from "react";
import { Link } from "../../routes";

const BsNavLink = ({ path, title }) => (
  <Link route={path}>
    <a className="navigation__link">{title}</a>
  </Link>
);

const Navigation = () => {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        name=""
        className="navigation__checkbox"
        id="navi-toggle"
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <BsNavLink path="/" title="Home" />
          </li>

          <li className="navigation__item">
            <BsNavLink path="/portfolios" title="Portfolios" />
          </li>

          <li className="navigation__item">
            <BsNavLink path="/about" title="About Me" />
          </li>
          <li className="navigation__item">
            <BsNavLink path="/contact" title="Contact" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
