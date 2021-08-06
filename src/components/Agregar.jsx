import React from 'react'

function Agregar() {
    return (
        <form class="position-fixed input-group p-3 bg-dark"
        >
           <input 
           type="text"
           className="form-control"
           />

           <div className="input-group-append">
               <button
               className="btn btn-primary"
               type="submit"
               >
                   Enviar
               </button>
           </div>
        </form>

    )
}

export default Agregar
