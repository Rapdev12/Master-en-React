import { useEffect, useState } from 'react';
import './Articles.css';
import { Global } from '../../helpers/Global';
import { Petitions } from '../../helpers/Petitions';

function Articles() {

  const [articles, setArticles] = useState([]);


useEffect(() => {
  const searchArticle = async () => {
    try {

      const { information } = await Petitions(Global.url + "article", "GET")

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
          articles.length >= 1? (
        articles.map(articles => {
          return (
            /* FILA DE ARTÍCULO 1 */
            <article key={articles.id} className="article-row">
              <div className="article-row-content">
                <span className="article-row-tag">Crítica • 20 Ago, 2026</span>
                <h3 className="article-row-title">{articles.title}</h3>
                <p className="article-row-excerpt">
                  {articles.description}
                </p>
              </div>

              <div className="article-row-actions">
                <button type="button" className="btn-manage btn-edit">Editar</button>
                <button type="button" className="btn-manage btn-delete">Eliminar</button>
              </div>
            </article>
          )
        }
      )
    ): (
          <p className="no-articles">Cargando artículos o no hay registros disponibles...</p>
        )}
   
      </div>
    </section>
  );
};

export default Articles;

