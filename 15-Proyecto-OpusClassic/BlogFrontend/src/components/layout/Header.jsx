import './Header.css';
import logo from "../../assets/1414106.svg"


function Header() {
  return (
    <header className="header">
      {/* Contenedor para centrar la imagen */}
      <div className="logo-wrapper">
        <img 
          src={logo} 
          alt="Clave de Sol" 
          className="header-logo" 
        />
      </div>
      {/* Título principal centrado */}
      <h1 className="header-title">Opus Classic</h1>
    </header>
  );
}
export default Header;