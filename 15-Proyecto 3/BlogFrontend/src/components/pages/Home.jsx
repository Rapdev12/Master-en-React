import './Home.css';

const Home = () => {
  return (
    <main className="home-container">
      {/* Título de la sección */}
      <h2 className="section-title">Edición Destacada</h2>
      {/* Rejilla de Tarjetas */}
      <div className="cards-grid">
        {/* TARJETA 1 */}
        <article className="card">
          <div className="card-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=500&q=80" 
              alt="Partitura y piano" 
              className="card-image" 
            />
          </div>
          <div className="card-body">
            <span className="card-tag">Crítica • 20 Ago</span>
            <h3 className="card-title">La Quinta Sinfonía de Beethoven</h3>
            <p className="card-text">
              El motivo del destino y la revolucionaria fuerza orquestal que transformó para siempre la música vienesa.
            </p>
            <button type="button" className="card-button">Leer Artículo</button>
          </div>
        </article>
        {/* TARJETA 2 */}
        <article className="card">
          <div className="card-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1520523839898-50712825e617?w=500&q=80" 
              alt="Clavecín antiguo" 
              className="card-image" 
            />
          </div>
          <div className="card-body">
            <span className="card-tag">Historia • 18 Ago</span>
            <h3 className="card-title">El Enigma del Réquiem de Mozart</h3>
            <p className="card-text">
              Mitos, manuscritos y los secretos de la misteriosa misa de difuntos inacabada por el genio de Salzburgo.
            </p>
            <button type="button" className="card-button">Leer Artículo</button>
          </div>
        </article>
        {/* TARJETA 3 */}
        <article className="card">
          <div className="card-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=500&q=80" 
              alt="Violín clásico" 
              className="card-image" 
            />
          </div>
          <div className="card-body">
            <span className="card-tag">Barroco • 15 Ago</span>
            <h3 className="card-title">Las Cuatro Estaciones de Vivaldi</h3>
            <p className="card-text">
              El virtuosismo del violín y la música descriptiva que definieron el sonido de la Venecia del siglo XVIII.
            </p>
            <button type="button" className="card-button">Leer Artículo</button>
          </div>
        </article>
      </div>
    </main>
  );
}

export default Home