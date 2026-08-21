//Importar modulos de react / dependencia
import React from 'react';

//Funcion del componente
const MiCompononte =() =>{
    
    let nombre = "Ronald";
    let apellido = "Palacios";

    let usuarios = {
        nombre:"Ronald",
        apellido:"Palacios",
        web:"ronaldpalacios12.com.ar"
    }

    return (
    <> {/*Ese signo se llama Fragmen <> </>*/}
    <hr/>
    <ul>
        <li>Nombre: <strong>{nombre}</strong></li>
        <li>Apellido: <strong>{apellido}</strong></li>
    </ul>
    <h2>
        Componentes creados
    </h2>
    <h3>Datos de Usuario:</h3>
        <ul>
            <li>Nombre: <strong>{usuarios.nombre}</strong></li>
            <li>Apellido: <strong>{usuarios.apellido}</strong></li>
            <li>web: <strong>{usuarios.web}</strong></li>
        </ul>

    <p>Este es mi primer componente</p>
    <ul>
        <li>
            React
        </li>
        <li>
            Angular
        </li>
        <li>
            Vue
        </li>
    </ul>
   
    
    </>
    );
};

//Export
export default MiCompononte;