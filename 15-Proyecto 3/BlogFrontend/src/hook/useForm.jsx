import { useState } from "react";


export const useForm = (dataForm ={}) =>{
    
    const [MyForm, setMyForm] = useState(dataForm);
    const sendme = (e) => {
        e.preventDefault();

        let course = {
            titulo: e.target.titulo.value,
            anio: e.target.anio.value,
            descripcion: e.target.descripcion.value,
            autor: e.target.autor.value,
            email: e.target.mail.value
        }
        setMyForm(course)
        
    };

    const change = ({ target }) => {
        const { name, value } = target;
        setMyForm({
            ...MyForm,
            [name]: value
        })

    };
    
    return {

        estado: MyForm,
        sendme,
        change

    }
} 