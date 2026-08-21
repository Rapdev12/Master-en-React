

function Articles() {
  return (
    <article>
      <div>
        {/* Aquí irá la imagen del artículo más adelante */}
        <img src="https://via.placeholder.dumps/300x180" alt="Imagen del artículo" />
      </div>
      <div>
        <span>Categoría • Fecha</span>
        <h2>Título del Artículo Clásico</h2>
        <p>
          Este es un extracto breve del artículo donde se analiza la obra,
          el compositor o la época musical correspondiente. Ideal para captar
          la atención del lector antes de ver el texto completo.
        </p>
        <div>
          <button>Leer más</button>
        </div>
      </div>
    </article>
  )
}

export default Articles