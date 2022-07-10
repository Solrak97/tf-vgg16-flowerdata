import React from "react";
import "../App.css";
import DropZone from "./DropZone";
import Button from "react-bootstrap/Button";

function Home() {
  return (
    <div>
      <h1>Adjunta una imagen de una planta</h1>
      <p class="small text-center">Recuerda que las categorías permitidas son: margaritas, rosas, dientes de león, tulipanes y girasoles</p>
      <DropZone />
      <br></br>
      <Button
        variant="primary"
        style={{ backgroundColor: "#31525B", fontSize: "2rem" }}
      >
        Clasificar
      </Button>{" "}
    </div>
  );
}

export default Home;
