import './CreateArticles.css';


function CreateArticles() {
  return (
    <section className="create-container">
      {/* Título de la sección */}
      <h2 className="create-title">Redacción de Crónica Musical</h2>
      
      {/* Formulario */}
      <form className="create-form">
        {/* Campo de Título */}
        <div className="form-group">
          <label htmlFor="title" className="form-label">Título de la Obra o Artículo</label>
          <input 
            type="text" 
            id="title" 
            placeholder="Ej: Análisis del Concierto de Aranjuez..." 
            className="form-input"
          />
        </div>

        {/* Campo de Contenido */}
        <div className="form-group">
          <label htmlFor="content" className="form-label">Cuerpo de la Crónica</label>
          <textarea 
            id="content" 
            placeholder="Escribe aquí el análisis, contexto histórico o partitura..." 
            className="form-textarea"
          ></textarea>
        </div>

        {/* Campo de Imagen */}
        <div className="form-group">
          <label htmlFor="file" className="form-label">Grabado o Imagen Ilustrativa</label>
          <input 
            type="file" 
            id="file" 
            className="form-file"
          />
        </div>

        {/* Botón de Publicar */}
        <div className="form-actions">
          <button type="submit" className="btn-submit">
            Publicar en la Gaceta
          </button>
        </div>
      </form>
    </section>
  );
}

export default CreateArticles;