import "./Sidebar.css"


function Sidebar({ texto, setTexto, onSearch }) {

  return (
    <aside className="sidebar">
      {/* Título de la sección */}
      <h3 className="sidebar-title">Search</h3>
      {/* Caja del buscador */}
      <div className="search-box">
        <input 
          type="text" 
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Search for a work, author..." 
          className="search-input" 
        />
        <button type="button" 
        className="search-button"
         onClick={onSearch}>
          Search
        </button>
      </div>
    </aside>
  );
}

export default Sidebar