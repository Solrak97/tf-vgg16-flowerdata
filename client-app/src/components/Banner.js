import React from "react";
import "../App.css";

function Banner() {
  return (
    <div className="background">
      <h1 className="main-title rainbow rainbow_text_animated">
        {" "}
        ¡Bienvenido a PlantBank!{" "}
      </h1>
      <h2 className="h4-text">
        El sitio web que te permite clasificar tipos de plantas
      </h2>
    </div>
  );
}

export default Banner;
