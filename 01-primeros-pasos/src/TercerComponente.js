import React from "react";
import PropTypes from "prop-types" /* es una biblioteca de React que te permite 
validar en tiempo de ejecución el tipo de datos de las propiedades 
(props) que recibe un componente */

const TercerComponente = ({datos}) => {
  return(
  <div>

    <h1>Comunicacion entre componentes</h1>
    <ul>
        <li>{datos.nombre}</li>
        <li>{datos.apellido}</li>
        <li>{datos.edad}</li>
    </ul>

  </div>


  );
};
export default TercerComponente ;

TercerComponente.propTypes={
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired
}

/* Definición de las reglas de validación Otro Ejemplo
TarjetaUsuario.propTypes = {
  nombre: PropTypes.string.isRequired, // Obligatorio y debe ser texto
  edad: PropTypes.number,              // Opcional y debe ser un número
  esPremium: PropTypes.bool            // Opcional y debe ser booleano
}; */