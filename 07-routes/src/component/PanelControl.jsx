import { NavLink, Outlet } from "react-router";

function PanelControl() {
  return (
    <div>

        <h1>CONTROL PANEL</h1>
        <p>Choose these options</p>

    <nav>
        <ul>
          <li>
            <NavLink
              to="/controlpanel/panelhome"
              className={({ isActive }) => (isActive ? "newLetter" : "")}
            >
              Panel Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/controlpanel/blogcreate"
              className={({ isActive }) => (isActive ? "newLetter" : "")}
            >
              Blog Create
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/controlpanel/usercreate"
              className={({ isActive }) => (isActive ? "newLetter" : "")}
            >
              User Create
            </NavLink>
          </li>

           <li>
            <NavLink
              to="/controlpanel/about"
              className={({ isActive }) => (isActive ? "newLetter" : "")}
            >
              About
            </NavLink>
          </li>
                    
        </ul>
      </nav>


      {/* AQUÍ APARECEN LAS SUBRUTAS GRACIAS AL OUTLET */}
      <div className="content-outlet-container">
        <Outlet />
      </div>
    
    </div>
  )
}

export default PanelControl