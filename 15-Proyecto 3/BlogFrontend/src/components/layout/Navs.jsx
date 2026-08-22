import { NavLink } from 'react-router-dom';
import './Navs.css';

function Navs() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/home" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/articles" className="nav-link">Articles</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/create" className="nav-link">Create</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/aboutme" className="nav-link">About Me</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navs