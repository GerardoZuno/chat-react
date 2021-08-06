import React from "react";
import Agregar from "./Agregar";

function Chat() {
  return (
    <div className="mt-3 px-2">
      <h1>Chat Live</h1>
      <div className="d-flex justify-content-end mb-2">
      <span className="badge badge-pill badge-primary">
          Mensaje del Usuario
      </span>
      </div>
      <div className="d-flex justify-content-start mb-2">
      <span className="badge badge-pill badge-secondary">
          Mensaje del Usuario Externo
      </span>
      </div>
      
      <Agregar />
    </div>
  );
}

export default Chat;
