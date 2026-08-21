import { NavLink } from "react-router";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <span className="footer-icon">R</span>

          <div>
            <h3>Ronald Palacios</h3>
            <p>Desarrollador web</p>
          </div>
        </div>

        <div className="footer-social">
          <a href="https://github.com/Rapdev12/Rapdev12" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/ronald-%EB%A1%9C%EB%82%A0%EB%93%9C-palacios-%ED%8C%94%EB%9D%BC%EC%8B%9C%EC%98%A4%EC%8A%A4-311a6b155/" target="_blank" rel="noreferrer">LinkedIn</a>
          <NavLink to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}>
            Contact
          </NavLink>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Ronald Palacios. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer