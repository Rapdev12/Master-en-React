import { useState } from 'react';
import "./home.css"
import Add from '../hook/add';
import Storage from "../hook/storage";
import Buscador from "../hook/search";
import List from "../hook/list";
import { handleEdit, handleUpdate } from "../hook/edit";



export default function Home() {
    const [pelisState, setPelisiState] = useState(() => {
        let storageInstance = new Storage();
        let pelis = storageInstance.getData();
        return pelis ? pelis : [];
    });

    const [editando, setEditando] = useState(null);

    // 2. Instanciamos Add de forma segura aquí dentro
    const addService = new Add(pelisState, setPelisiState);

    // 3. Función para borrar película instanciando Storage localmente
   const borrarPelicula = (id) => {
    let storageInstance = new Storage();
    let pelisStored = storageInstance.getData();
    
    const new_pelis_store = pelisStored.filter((peli) => peli.id !== parseInt(id));

    storageInstance.save(new_pelis_store);
    setPelisiState(new_pelis_store);
};

    return (
        <div className="layaut">
            {/* Cabecera */}
            <header className="header">
                <div className="logo">
                    <div className="play"></div>
                </div>
                <h1>Mis Peliculas</h1>
            </header>

            {/* Navegación */}
            <nav className="nav">
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Peliculas</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>

            {/* Contenido Principal / Listado */}
            <section id="content" className="content">
                <List
                    pelisState={pelisState}
                    setEditando={setEditando}
                    borrarPelicula={borrarPelicula}
                />
            </section>

            <section id="content" className="content">
                <List
                    pelisState={pelisState}
                    setPelisiState={setPelisiState}
                    editando={editando}
                    setEditando={setEditando}
                    borrarPelicula={borrarPelicula}
                />
            </section>

            {/* Barra lateral */}
            <aside className="lateral">
                <Buscador pelisStored={pelisState} setPelisiState={setPelisiState} />


                <div className="add">
                    <h3 className="title">Añadir pelicula</h3>
                    <form onSubmit={(e) => addService.peliSave(e)}>
                        <input type="text" id="title" name="title" placeholder="Titulo" />
                        <textarea id="descripcion" name="descripcion" placeholder="Descripcion"></textarea>
                        <input id="imagen" name="imagen" type="file" accept="image/*" />
                        <input type="submit" id="save" value="Guardar" />
                    </form>
                </div>
            </aside>

            {/* Pie de pagina */}
            <footer className="footer">
                &copy; Ronald Palacios
            </footer>
        </div>
    );
}

