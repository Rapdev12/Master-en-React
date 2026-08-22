import "./Aboutme.css";

function Aboutme() {
  return (
    <section className="about-container">
      {/* Hoja de partitura musical */}
      <div className="music-sheet">
        {/* Cabecera de la hoja con claves musicales */}
        <div className="sheet-header">
          <span className="sheet-symbol">𝄞</span>
          <h2 className="sheet-title">Crónica del Autor</h2>
          <span className="sheet-symbol">𝄢</span>
        </div>
        {/* Contenido principal */}
        <div className="sheet-content">
          {/* Foto de perfil con marco redondeado */}
          <div className="author-photo-wrapper">
            <img
              src="https://media.istockphoto.com/id/183325799/photo/music-love.webp?s=1024x1024&w=is&k=20&c=hF8keOe8M99Mnt9_28RiyN9nNRYsqQvYbDy-ZM-XYKA="
              alt="Retrato de Ronald"
              className="author-photo"
            />
            <span className="photo-caption">Ludwig van Beethoven: </span>
          </div>
          {/* Bloque de texto editorial */}
          <div className="sheet-text">
            <p className="editorial-lead">
              Passionate about classical music, the history of great composers, and score analysis.
              This space is dedicated to sharing stories,
              reflections, and the profound legacy of symphonic and chamber works.
            </p>
            <p className="editorial-body">
              Behind every chord lies a labyrinth of silences and pent-up passions 
              demanding to be deciphered—a one-way journey to 
              the heart of the great masters where time stands still, 
              preparing us to understand that...
            </p>

            <blockquote className="editorial-quote">
              <p className="quote-text">
                «Music is a higher revelation than all wisdom and philosophy.»
              </p>
              <cite className="quote-author">— Ludwig van Beethoven</cite>
            </blockquote>

          </div>
        </div>
        {/* Pie de la hoja */}
        <div className="sheet-footer">
          <span>Opus Classic · Edición Biográfica</span>
        </div>
      </div>
    </section>
  );
}
export default Aboutme;
