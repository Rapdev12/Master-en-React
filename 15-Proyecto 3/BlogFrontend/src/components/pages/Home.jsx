import { useState } from "react";
import Sidebar from "../layout/Sidebar";
import './Home.css';


function Home() {

  const [showDescription, setshowDescription] = useState(false);


  return (
    <div className="home-layout">
      {/* 1. Sidebar exclusivo de la portada */}
      <Sidebar />
      {/* 2. Contenido principal a la derecha */}
      <section className="home-content">
        <h2 className="section-title">Featured Edition</h2>
        <div className="cards-grid">
          {/* Tarjeta 1 */}
          <article className="card">
            <div className="card-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=500&q=80"
                alt="Beethoven"
                className="card-image"
              />
            </div>
            <div className="card-body">
              <span className="card-tag">Review • Aug 20</span>
              <h3 className="card-title">Beethoven's Fifth Symphony</h3>
              {showDescription && (
                <p className="card-text">
                  The fate motif and the revolutionary orchestral force that transformed Viennese music forever.
                </p>
              )}
              <button type="button" className="card-button" onClick={() => setshowDescription(!showDescription)}
              >{showDescription ? 'Hide Article' : 'Read Article'}</button>
            </div>
          </article>
          {/* Tarjeta 2 */}
          <article className="card">
            <div className="card-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1526142684086-7ebd69df27a5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Mozart"
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
          {/* Tarjeta 3 */}
          <article className="card">
            <div className="card-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=500&q=80"
                alt="Vivaldi"
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
      </section>
    </div>
  );
}
export default Home;