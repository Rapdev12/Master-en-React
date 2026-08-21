import React, {useState}from 'react'

function MiPrimerEstado() {
  
    /*

     // Problematica
     let nombre = "Ronald Palacios";

     let cambiarNombre = e =>{
      nombre = "Alejandro Ortiz"
     }
    */

     let [nombre, setNombre] = useState("Ronald Palacios");

     let cambiarNombre = (e, nombreFijo) =>{
        setNombre(nombreFijo)
     }

    return (
    <div>
        <h3>Mi Primer Estado</h3>
        
        <strong>
            {nombre}
        </strong>
        &nbsp;
        <button onClick={ e => cambiarNombre(e, "Alejandro Palacios") }>Cambiar</button>
        &nbsp;
        <input type= "text" onKeyUp={e => cambiarNombre(e, e.target.value)} placeholder='cambiar nombre' />
        
    </div>
  )
}

export default MiPrimerEstado