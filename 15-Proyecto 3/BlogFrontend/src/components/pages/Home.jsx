// Home.jsx
import { useState } from "react";
import Sidebar from "../layout/Sidebar";
import { useArticles } from "../../hook/useArticles";
import { Global } from "../../helpers/Global";
import './Home.css';
import { useSearchArticle } from "../../hook/useSearchArticle";

function Home() {
  // para traeme TODOS los artículos
  const { articles: allArticles, loading } = useArticles();

  // Guardo para qué los artículos esten "expandidos" (mostrando su descripción completa)
  const [expandedIds, setExpandedIds] = useState([]);

  // aca esta la lógica de búsqueda
  const { articles: searchResults, texto, setTexto, fetchArticles } = useSearchArticle();

  // Si el usuario escribió algo en el buscador
  const isSearching = texto.trim().length > 0;
  const articlesToShow = isSearching ? searchResults : allArticles;

  // Agrega o quita el id del artículo en expandedIds
  const toggleDescription = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="home-layout">
      {/* 1. Sidebar exclusivo de la portada,  recibe todo por props */}
      <Sidebar
        texto={texto}
        setTexto={setTexto}
        onSearch={() => fetchArticles(texto)}
      />

      {/* 2. Contenido principal a la derecha */}
      <section className="home-content">
        {/* El título cambia según si estamos buscando o mostrando los destacados */}
        <h2 className="section-title">
          {isSearching ? `Resultados para "${texto}"` : "Featured Edition"}
        </h2>

        <div className="cards-grid">
          {/* Mientras carga el fetch inicial de artículos, mostramos "Cargando..." */}
          {loading ? (
            <p>Cargando artículos...</p>
          ) : articlesToShow.length > 0 ? (
            articlesToShow.map((article) => {
              const isExpanded = expandedIds.includes(article._id);

              return (
                <article key={article._id} className="card">
                  <div className="card-image-wrapper">
                    <img
                      src={
                        article.imagen && article.imagen !== "default.png"
                          ? Global.url + "imagen/" + article.imagen
                          : "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=500&q=80"
                      }
                      alt={article.title}
                      className="card-image"
                    />
                  </div>
                  <div className="card-body">
                    <span className="card-tag">
                      {new Date(article.date).toLocaleDateString("es-ES", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <h3 className="card-title">{article.title}</h3>
                    {isExpanded && (
                      <p className="card-text">{article.content}</p>
                    )}
                    <button
                      type="button"
                      className="card-button"
                      onClick={() => toggleDescription(article._id)}
                    >
                      {isExpanded ? "Hide Article" : "Read Article"}
                    </button>
                  </div>
                </article>
              );
            })
          ) : (
            <p className="no-articles">No items available.</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;