import { handleEdit, handleUpdate } from './edit.jsx';

export default function List({ pelisState, setPelisiState, editando, setEditando, borrarPelicula }) {
    
    if (!pelisState || pelisState.length === 0) {
        return <h2>No hay películas para mostrar</h2>;
    }

    return (
        <>
            {pelisState.map((peli) => (
                <article className="peli-item" key={peli.id} id={`peli-${peli.id}`}>
                    
                    {/* Imagen de la película */}
                    {peli.imagen && <img src={peli.imagen} alt={peli.title} />}

                    {/* Título */}
                    <h3 className="title">{peli.title}</h3>

                    {/* Descripción */}
                    <p className="descripcion">{peli.descripcion}</p>

                    {/* Botón Editar */}
                    <button 
                        className="edit" 
                        onClick={() => handleEdit(peli.id, pelisState, setPelisiState, setEditando)}
                    >
                        Editar
                    </button>

                    {/* Botón Borrar */}
                    <button 
                        className="delete" 
                        onClick={() => borrarPelicula(peli.id)}
                    >
                        Borrar
                    </button>

                    {/* Formulario de edición desplegable */}
                    {editando === peli.id && (
                        <form className="edit_form" onSubmit={(e) => handleUpdate(e, peli.id, pelisState, setPelisiState, setEditando)}>
                            <input type="text" className="edited_title" defaultValue={peli.title} />
                            <textarea className="edited_descripcion" defaultValue={peli.descripcion}></textarea>
                            <input type="submit" className="editar" value="Actualizar" />
                        </form>
                    )}
                </article>
            ))}
        </>
    );
}