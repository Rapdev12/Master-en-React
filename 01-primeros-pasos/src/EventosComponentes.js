import React from "react";

const EventosComponentes = () => {
  let hasDadoClick = (e, nombre) => {
    alert("Has dado click en el boton !!" + nombre);
  };

  let hasDadoDobleClick = (e) => {
    alert("Has dado Doble Click !!!");
  };

  let hasEntrado = (e) => {
    console.log("Has entrado a la caja con el mouse");
  };

  let hasSalido = (e) => {
    console.log("Has Salido de la caja");
  };

  let estasDentro = (e) => {
   console.log("Estas dentro del input ingresa tu nombre");
  };
  let estasFuera = (e) => {
    console.log("Estas fuera del input chaoo");
  };
  return (
    <div>
      <h2>Eventos en React</h2>
      <p>
        {/*Evento Click */}
        <button onClick={(e) => hasDadoClick(e, "Ronald")}>Dame Click</button>
      </p>

      <p>
        {/*Evento DobleClick */}
        <button onDoubleClick={hasDadoDobleClick}>Dame Doble Click</button>
      </p>

      <div id="caja" onMouseEnter={hasEntrado} onMouseLeave={hasSalido}>
        {/*Evento DobleClick */}
        Pasa por encima
      </div>

        {/*Evento onFocus y onBlur*/}
      <p>
        <input
          type="text"
          onFocus={estasDentro}
          onBlur={estasFuera}
          placeholder="Intruduce tu nombre..."
        />
      </p>
    </div>
  );
};

export default EventosComponentes;
