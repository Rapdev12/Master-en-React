import React from "react";

const SegundoComponente = () => {
  //let libros = ["Harry Potter","Juegos de trono","Clean Code"];
  let libros = [];

  return (
    <div className="segundo-componente">

      <h1>Listado de Libros </h1>
      
      {libros.length >= 1 ? (
        <ul>
          {libros.map((libro, indice) => {
            return <li key={indice}>{libro}</li>;
          })}

          {/**<li>
                {libros[0]}
            </li>
            <li>
                {libros[1]}
            </li>
            <li>
                {libros[2]}
            </li>*/}
        </ul>
      ) : (
        <p>No hay Libros</p>
      )}
    </div>
  );
};
export default SegundoComponente;
