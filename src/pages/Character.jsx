import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Characters } from "../models/Characters";

const Character = () => {
  const { id } = useParams();
  const history = useNavigate();

  const { type, name, description } = Characters.find(
    (personaje) => personaje.id === id
  );

  const path = `/assets/${type}-${id}.png`;

  const handleBack = () => {
    history(-1);
  };

  return (
    <div className="container mt-5 text-center">
      <div className="row justify-content-md-center">
        <div className="col-md-auto">
          <img
            src={path}
            alt={id}
            className=""
            style={{ width: "100%", height: "450px", objectFit: 'fill' }}
          />
        </div>
        <div className="col-md-auto">
          <h2>Nombre: {name}</h2>
          <p>Descripcion: {description}</p>
          <button className="btn btn-outline-warning" onClick={handleBack}>
            Regresar...
          </button>
        </div>
      </div>
    </div>
  );
};

export default Character;
