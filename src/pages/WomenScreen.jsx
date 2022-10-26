import React from "react";
import Card from "../components/Card";
import { Characters } from "../models/Characters";

const WomenScreen = () => {
  const personajes = Characters.filter((personaje) => personaje.type === "m");

  return (
    <>
      <h2 className="mt-3 text-center">Personajes Femeninos de Dragon Ball</h2>
      <hr />
      <div className="container d-flex flex-wrap justify-content-center gap-5 my-5">
        {personajes.map((personaje) => {
          return <Card key={personaje.id} {...personaje} />;
        })}
      </div>
    </>
  );
};
export default WomenScreen;
