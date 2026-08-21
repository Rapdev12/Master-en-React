/* eslint-disable react-refresh/only-export-components */
import { useState, createContext } from "react";


export const PruebaContext = createContext(null);

export const PruebaProvider = ({ children }) => {

    const [datosCurso, setDatosCurso] = useState({
        nombreCurso: "Máster en React",
        profesor: "Víctor Robles",
        modulo: "Context API",
        estudiante:""
    });
    return (
        <PruebaContext.Provider value={{ datosCurso, setDatosCurso }}>
            {children}
        </PruebaContext.Provider>
    );
};
