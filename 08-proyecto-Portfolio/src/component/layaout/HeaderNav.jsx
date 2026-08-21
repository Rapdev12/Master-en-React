import { NavLink } from "react-router";


function HeaderNav() {
    return (
        <header className="header">
            <div className="logo">
                <span className="logo-icon">R</span>
                <h3> <span>Ronald</span>
                    <span>Palacios</span></h3>
            </div>

            <nav>
                <ul>

                    <li>
                        <NavLink to="/home"
                            className={({ isActive }) => (isActive ? "active" : "")}>
                            Homepage
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/contact"
                            className={({ isActive }) => (isActive ? "active" : "")}>
                            Contact
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/portfolio"
                            className={({ isActive }) => (isActive ? "active" : "")}>
                            Portfolio
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/services"
                            className={({ isActive }) => (isActive ? "active" : "")}>
                            Services
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/resumecv"
                            className={({ isActive }) => (isActive ? "active" : "")}>
                            My Cv
                        </NavLink>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default HeaderNav