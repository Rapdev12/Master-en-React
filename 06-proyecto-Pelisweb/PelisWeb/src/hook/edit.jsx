import Storage from "./storage";

export const handleEdit = (peliId, pelisStored, setPelisiState, setEditando) => {
    setEditando(peliId);
};

export const handleUpdate = (e, peliId, pelisStored, setPelisiState, setEditando) => {
    e.preventDefault();
    
    const storage = new Storage();
    let target = e.target;
    
    let title = target.querySelector(".edited_title").value;
    let descripcion = target.querySelector(".edited_descripcion").value;

    let index = pelisStored.findIndex(peli => peli.id === parseInt(peliId));

    if (index !== -1) {
        pelisStored[index] = {
            id: peliId,
            title: title,
            descripcion: descripcion
        };

        storage.save(pelisStored);
        setPelisiState([...pelisStored]);
        setEditando(null);
    }
};