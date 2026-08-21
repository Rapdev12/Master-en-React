import { useState, useEffect } from "react";



export const useAjax = (newurl) =>{


const [state, setState] = useState({
        data: null,
        loading: false // 1. Añadimos el estado de carga inicial en falso
    });

    const [url, setUrl] = useState(newurl);

useEffect(() => {
        if (!url) return;

        const fetchData = async () => {
            setState({
                data: null,
                loading: true
            });

            // Simulamos un retraso de 1 segundo (1000ms) para ver el "Cargando..."
            setTimeout(async () => {
                try {
                    const response = await fetch(url);
                    const data = await response.json();

                    setState({
                        data: data,
                        loading: false
                    });
                } catch (error) {
                    console.error("Error:", error);
                    setState({
                        data: null,
                        loading: false
                    });
                }
            }, 3000); // <--- Aquí controlas cuántos milisegundos quieres que dure el "Cargando"
        };

        fetchData();
    }, [url]); // <--- Aquí está el secreto: se dispara cada vez que cambia 'url'
    
    
    return{
        state,
        setUrl
    }
}