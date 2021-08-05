import React from "react";
import { ChatContext } from "../context/ChatProvider";

const NavBar = () => {
  const { usuario, ingresoUsuario, cerrarSesion } =
    React.useContext(ChatContext);
  return (
    <nav className="navbar navbar-dark bg-dark my-10">
      <span className="navbar-brand">Chat</span>
      <div>
        {usuario.estado ? (
          <button 
          className="btn btn-outline-danger my-1"
          onClick={e =>cerrarSesion()}
          >
            Cerrar Sesion
          </button>
        ) : (
          <button 
          className="btn btn-dark btn-outline-success my-1 mr-3"
          onClick={e =>ingresoUsuario()}
          >
            Acceder
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
