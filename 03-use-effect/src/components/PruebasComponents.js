import React, { useState, useEffect } from "react";

function PruebasComponents() {
  let [user, setUser] = useState("Ronald Palacios");
  let [date, setDate] = useState("31-12-2026");
  
  let modUser = (e) => {
    setUser(e.target.values);
  };

  let changeDate = (e) => {
    setDate(new Date().toLocaleDateString());
  };
  //Se ejecuta solo una vez el componente useEffect
  useEffect(() => {
        console.log("You have loaded the component.");
  });

  

  return (
    <div>
      <h1> The Effect - useEffect Hook </h1>
      <strong>{user}</strong>
      &nbsp; <br></br>
      <strong>{date}</strong>
      <br></br>
      <p>
        <input type="text" onChange={modUser} placeholder="Change your name" />

        <button onClick={changeDate}> Change Date </button>
      </p>
    </div>
  );
}

export default PruebasComponents;
