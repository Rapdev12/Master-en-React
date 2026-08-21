import { useState } from "react";

export const useMayus = (texto) =>{

    const [myText, setMyText] = useState(texto)
    const mayusculas = () =>{
        setMyText(texto.toUpperCase());
    }

    const minusculas = () =>{
        setMyText(texto.toLowerCase());
    };


    return{
        estado:myText,
        mayusculas,
        minusculas
    };
}