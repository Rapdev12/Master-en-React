import Storage from "./storage";

export const borrarPeliculaStorage = (id) => {
    const storage = new Storage();
    let pelisStored = storage.getData();

    const new_pelis_store = pelisStored.filter((peli) => peli.id !== parseInt(id));
    storage.save(new_pelis_store);
    
    return new_pelis_store; // Devolvemos el array ya filtrado
};