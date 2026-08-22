import Storage from './storage';

export default class Add {
  constructor(pelisState, setPelisiState) {
    this.storage = new Storage();
    this.pelisState = pelisState;
    this.setPelisiState = setPelisiState;
  }

  // Recibimos directamente el evento onSubmit del formulario de React
  peliSave(e) {
    e.preventDefault();
    let target = e.target;

    // Conseguir datos actualizados y el último ID
    let pelis = this.storage.getData();
    let lastId = this.storage.getLastId ? this.storage.getLastId() : (pelis.length > 0 ? pelis[pelis.length - 1].id : 0);

    // Datos a guardar desde el formulario
    let title = target.title.value;
    let descripcion = target.descripcion.value;
    let newImagen = target.imagen.files[0];

    if (title.trim() !== "" && descripcion.trim() !== "") {
      
      // Función interna para guardar el objeto y actualizar React
      const guardarPeliculaObj = (imagenBase64 = "") => {
        let peli = {
          id: lastId + 1,
          title,
          descripcion,
          imagen: imagenBase64,
        };

        // Agregar al array
        let nuevasPelis = [...this.pelisState, peli];

        // Guardar en el localstorage con tu clase Storage
        this.storage.save(nuevasPelis);

        // Actualizar el estado de React (esto hace que la pantalla se pinte sola)
        this.setPelisiState(nuevasPelis);

        // Limpiar formulario
        target.reset();
      };

      // Si subió imagen, la leemos; si no, guardamos directo
      if (newImagen) {
        const reader = new FileReader();
        reader.onload = () => {
          guardarPeliculaObj(reader.result);
        };
        reader.readAsDataURL(newImagen);
      } else {
        guardarPeliculaObj();
      }

    } else {
      alert("Introduce bien los datos");
      return false;
    }
  }
}