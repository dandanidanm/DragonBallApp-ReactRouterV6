import React from "react";
import { Outlet } from "react-router-dom";
import Card from "../components/Card";
import { Characters } from "../models/Characters";

const MenScreen = () => {
  const personajes = Characters.filter((personaje) => personaje.type === "h");
 

  return (
    <>
      <h2 className="mt-3 text-center">Personajes masculinos de Dragon Ball</h2>
      <hr />
      <div className="container d-flex flex-wrap justify-content-center gap-5 my-5">
        {personajes.map((personaje) => {
          return <Card key={personaje.id} {...personaje} />;
        })}
      </div>
      <Outlet />
    </>
  );
};

export default MenScreen;
