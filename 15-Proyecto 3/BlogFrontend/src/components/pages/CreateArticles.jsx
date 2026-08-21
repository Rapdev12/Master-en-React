

function CreateArticles() {
  return (
    <div>
      <h2>Crear Nuevo Artículo</h2>
      
      <form>
        <div>
          <label htmlFor="title">Título</label>
          <input type="text" id="title" placeholder="Título del artículo..." />
        </div>

        <div>
          <label htmlFor="content">Contenido</label>
          <textarea id="content" placeholder="Escribe el contenido aquí..."></textarea>
        </div>

        <div>
          <label htmlFor="file">Imagen del Artículo</label>
          <input type="file" id="file" />
        </div>

        <button type="submit">Save Article</button>
      </form>
    </div>
  );
  
}

export default CreateArticles