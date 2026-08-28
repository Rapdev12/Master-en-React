import { useEffect, useState } from 'react';
import './Articles.css';
import { Global } from '../../helpers/Global';
import { Petitions } from '../../helpers/Petitions';
import { useEditArticle } from '../../hook/EditArticles';


function Articles() {

  const [articles, setArticles] = useState([]);


  useEffect(() => {
    const searchArticle = async () => {
      try {

        const { information } = await Petitions(Global.url + "article", "GET",)

        if (information.status == "success") {
          setArticles(information.articles)
        }
      }
      catch (error) {
        console.error("Error:", error);

      };

    };

    searchArticle();

  }, []);

  const deleteArticle = async (id) => {
    try {
      let { information } = await Petitions(Global.url + "article/" + id, "DELETE");

      if (information.status == "success") {
        // Filtramos el array quitando el artículo cuyo _id coincida con el que acabamos de borrar
        let articlesUpdated = articles.filter(article => article._id !== id);
        setArticles(articlesUpdated);
      }
    } catch (error) {
      console.error("Error al eliminar:", error);
    }
  }

  const { editId, titleInput, updateArticle ,setTitleInput, contentInput, setContentInput, startEditing, cancelEditing } = useEditArticle();


  return (
    <section className="articles-container">
      {/* Cabecera de la sección */}
      <div className="articles-header">
        <h2 className="articles-title">Hemeroteca de Crónicas</h2>
        <p className="articles-subtitle">Catálogo general de publicaciones y gestión editorial</p>
      </div>

      {/* Lista de artículos en formato de filas de gaceta */}
      <div className="articles-list">
        {
          articles.length >= 1 ? (
            articles.map(article => {
              return (
                /* FILA DE ARTÍCULO 1 */
                <article key={article.id} className="article-row">
                  {editId === article._id ? (
                    /* FORMULARIO DE EDICIÓN */
                    <form onSubmit={(e) => updateArticle(e, article._id, articles, setArticles)} className="edit-form">
                      <input
                        type="text"
                        value={titleInput}
                        onChange={(e) => setTitleInput(e.target.value)}
                      />
                      <textarea
                        value={contentInput}
                        onChange={(e) => setContentInput(e.target.value)}
                      />
                      <div className="edit-form-actions">
                        <button type="submit" className="btn-manage btn-edit">Guardar</button>
                        <button type="button" onClick={cancelEditing} className="btn-manage btn-delete">Cancelar</button>
                      </div>
                    </form>
                  ) : (
                    /* VISTA NORMAL DE LA TARJETA */
                    <>
                      {article.imagen && <img src={Global.url + "imagen/" + article.imagen} alt="" />}
                      {!article.imagen && <img src="" alt="" />}
                      <div className="article-row-content">
                        <span className="article-row-tag">Crítica • 20 Ago, 2026</span>
                        <h3 className="article-row-title">{article.title}</h3>
                        <p className="article-row-excerpt">
                          {article.description}
                        </p>
                      </div>

                      <div className="article-row-actions">
                        <button onClick={() => startEditing(article)}
                          type="button"
                          className="btn-manage btn-edit"
                        >
                          Editar
                        </button>


                        <button button onClick={() => deleteArticle(article._id)}
                          type="button"
                          className="btn-manage btn-delete"
                        >
                          Eliminar
                        </button>
                      </div>
                    </>
                  )}
                </article>
              );
            }
            )
          ) : (
            <p className="no-articles">Cargando artículos o no hay registros disponibles...</p>
          )}

      </div>
    </section >
  );
};

export default Articles;

