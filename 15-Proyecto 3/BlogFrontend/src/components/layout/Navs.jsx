import { NavLink } from 'react-router-dom';
import './Navs.css';

function Navs() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/home" className="nav-link">Inicio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/articles" className="nav-link">Artículos</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/create" className="nav-link">Crear</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/aboutme" className="nav-link">Sobre Mí</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navs