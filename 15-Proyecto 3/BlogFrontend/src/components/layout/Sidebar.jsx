import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Título de la sección */}
      <h3 className="sidebar-title">Búsqueda</h3>
      {/* Caja del buscador */}
      <div className="search-box">
        <input 
          type="text" 
          placeholder="Buscar obra, autor..." 
          className="search-input" 
        />
        <button type="button" className="search-button">
          Buscar
        </button>
      </div>
    </aside>
  );
}

export default Sidebar