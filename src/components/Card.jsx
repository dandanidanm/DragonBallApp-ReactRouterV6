import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, name, description, type }) => {
  const path = `/assets/${type}-${id}.png`;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={path}
        className="card-img-top"
        style={{ height: "450px", objectFit: "scale-down" }}
        alt={id}
        loading="lazy"
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <Link to={`/character/${id}`} className="btn btn-primary">
          ver mas...
        </Link>
      </div>
    </div>
  );
};

export default Card;
