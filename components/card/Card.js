import React from "react";

const Card = ({ projectTitle, desc, photoURL, URL, technologies, index }) => {
  return (
    <div className="col-1-of-3">
      <div className="card">
        <div className="card__side card__side--front">
          <div className={`card__picture card__picture--${index + 1}`}>
            &nbsp;
          </div>
          <h4 className="card__heading">
            <span
              className={`card__heading-span card__heading-span--${index + 1}`}
            >
              {projectTitle}
            </span>
          </h4>
          <div className="card__details">
            <ul>
              {technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className={`card__side  card__side--back  card__side--back-${index +
            1}`}
        >
          <div className="card__cta">
            <div className="card__price-box">
              <p className="card__price-only">{desc}</p>
            </div>
            <a
              href={URL}
              target="_blank"
              className="btn btn--white u-margin-bottom-med"
            >
              Check It Out!
            </a>
            <a
              href="#"
              target="_blank"
              className="btn btn--grey u-margin-bottom-small"
            >
              Explore The Repo! &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
