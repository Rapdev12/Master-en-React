import './Articles.css';

function Articles() {
  return (
    <section className="articles-container">
      {/* Cabecera de la sección */}
      <div className="articles-header">
        <h2 className="articles-title">Hemeroteca de Crónicas</h2>
        <p className="articles-subtitle">Catálogo general de publicaciones y gestión editorial</p>
      </div>

      {/* Lista de artículos en formato de filas de gaceta */}
      <div className="articles-list">
        
        {/* FILA DE ARTÍCULO 1 */}
        <article className="article-row">
          <div className="article-row-content">
            <span className="article-row-tag">Crítica • 20 Ago, 2026</span>
            <h3 className="article-row-title">La Quinta Sinfonía de Beethoven</h3>
            <p className="article-row-excerpt">
              Análisis estructural sobre el motivo del destino y la instrumentación orquestal...
            </p>
          </div>

          <div className="article-row-actions">
            <button type="button" className="btn-manage btn-edit">Editar</button>
            <button type="button" className="btn-manage btn-delete">Eliminar</button>
          </div>
        </article>

        {/* FILA DE ARTÍCULO 2 */}
        <article className="article-row">
          <div className="article-row-content">
            <span className="article-row-tag">Análisis • 18 Ago, 2026</span>
            <h3 className="article-row-title">Sonata Claro de Luna (Opus 27 N.º 2)</h3>
            <p className="article-row-excerpt">
              El lenguaje romántico temprano y la atmósfera poética de Ludwig van Beethoven...
            </p>
          </div>

          <div className="article-row-actions">
            <button type="button" className="btn-manage btn-edit">Editar</button>
            <button type="button" className="btn-manage btn-delete">Eliminar</button>
          </div>
        </article>

        {/* FILA DE ARTÍCULO 3 */}
        <article className="article-row">
          <div className="article-row-content">
            <span className="article-row-tag">Barroco • 15 Ago, 2026</span>
            <h3 className="article-row-title">Las Cuatro Estaciones de Vivaldi</h3>
            <p className="article-row-excerpt">
              Innovaciones del violín barroco y el programa descriptivo en la Venecia del siglo XVIII...
            </p>
          </div>

          <div className="article-row-actions">
            <button type="button" className="btn-manage btn-edit">Editar</button>
            <button type="button" className="btn-manage btn-delete">Eliminar</button>
          </div>
        </article>

      </div>
    </section>
  );
}

export default Articles;

