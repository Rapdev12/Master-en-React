import  { useState } from 'react';

export default function Buscador({ pelisStored, setPelisiState }) {
    const [busqueda, setBusqueda] = useState('');
    const [noCoincidencia, setNoCoincidencia] = useState(false);

    const buscarPelicula = (e) => {
        e.preventDefault();

        // 1. Filtrar las películas según lo que escribió el usuario
        const pelisEncontradas = pelisStored.filter(peli => {
            const textoLower = peli.title.toLowerCase();
            const busquedaLower = busqueda.toLowerCase();
            return textoLower.includes(busquedaLower);
        });

        // 2. Validar si hubo resultados
        if (pelisEncontradas.length <= 0 || busqueda.trim() === '') {
            setNoCoincidencia(true);
            // Opcional: si quieres que muestre todas o limpie, depende de tu lógica
            setPelisiState(pelisStored); 
        } else {
            setNoCoincidencia(false);
            // Actualizamos el estado principal de las películas para que el componente las pinte
            setPelisiState(pelisEncontradas);
        }
    };

    return (
        <div className="search">
            <h3 className="title">Buscador</h3>
            {noCoincidencia && (
                <span className="no-coincidencia" style={{color: "red", fontSize: "12px"}}>
                    No se encontró ninguna coincidencia
                </span>
            )}
            <form onSubmit={buscarPelicula}>
                <input 
                    type="text" 
                    id="search_field" 
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    placeholder="Buscar..."
                />
                <button id="search" type="submit">Buscar</button>
            </form>
        </div>
    );
}