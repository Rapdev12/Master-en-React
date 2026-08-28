import './CreateArticles.css';
import { useForm } from '../../hook/useForm';
import { Petitions } from '../../helpers/Petitions';
import { Global } from '../../helpers/Global';




function CreateArticles() {

  const { estado, change } = useForm({});

  const saveArticle = async (e) => {
    try {
      e.preventDefault();

      let { information } = await Petitions(Global.url + "create", "POST", estado);

      if (information && (information.status == "success" || information.article)) {
        
        const articleId = information.article?._id || information.articles?._id;
        console.log("ID del artículo creado:", articleId);

        const fileInput = document.querySelector("#file");

        if (fileInput && fileInput.files[0]) {
          const formData = new FormData();
          formData.append("file", fileInput.files[0]);

          const fileUp = await Petitions(Global.url + "subir-imagen/" + articleId, "POST", formData, true);
          console.log("Respuesta subida imagen:", fileUp);
        } else {
          console.log("No se seleccionó ningún archivo.");
        }
        e.target.reset();
      }
    } catch (error) {
      console.error("Error:", error);

    };

  }



  return (
    <section className="create-container">
      {/* Título de la sección */}
      <h2 className="create-title">Redacción de Crónica Musical</h2>

      {/* Formulario */}
      <form onSubmit={saveArticle} className="create-form">
        {/* Campo de Título */}
        <div className="form-group">
          <label htmlFor="title" className="form-label">Título de la Obra o Artículo</label>
          <input
            type="text"
            id="title"
            placeholder="Ej: Análisis del Concierto de Aranjuez..."
            className="form-input"
            onChange={change}
            name="title"
          />
        </div>

        {/* Campo de Contenido */}
        <div className="form-group">
          <label htmlFor="content" className="form-label">Cuerpo de la Crónica</label>
          <textarea
            id="content"
            placeholder="Escribe aquí el análisis, contexto histórico o partitura..."
            className="form-textarea"
            onChange={change}
            name="content"
          ></textarea>
        </div>

        {/* Campo de Imagen */}
        <div className="form-group">
          <label htmlFor="file" className="form-label">Grabado o Imagen Ilustrativa</label>
          <input
            type="file"
            id="file"
            className="form-file"
            name="file"

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