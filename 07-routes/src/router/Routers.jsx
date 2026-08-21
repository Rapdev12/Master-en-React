import { Routes, Route, NavLink } from "react-router";
import Homepage from "../component/Homepage";
import Blog from "../component/Blog";
import Contact from "../component/Contact";
import Error from "../component/Error";
import Person from "../component/Person";
import PanelControl from "../component/PanelControl";

// 1. Importa también tus subrutas aquí en el router
import PanelHome from "../component/ControlPanel/PanelHome";
import BlogCreate from "../component/ControlPanel/BlogCreate";
import UserCreate from "../component/ControlPanel/UserCreate";
import About from "../component/ControlPanel/About";


const Routers = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? "newLetter" : "")}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "newLetter" : "")}
            >
              Blog
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "newLetter" : "")}
            >
              Contact
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/controlpanel"
              className={({ isActive }) => (isActive ? "newLetter" : "")}
            >
              Control Panel
            </NavLink>
          </li>
          
        </ul>
      </nav>

      {/* RUTAS PRINCIPALES Y ANIDADAS */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/person/:name/:secondName" element={<Person />} />
        
        {/* RUTA PADRE CON SUS HIJAS ADENTRO */}
        <Route path="/controlpanel/*" element={<PanelControl />}>
          <Route path="panelhome" element={<PanelHome />} />
          <Route path="blogcreate" element={<BlogCreate />} />
          <Route path="usercreate" element={<UserCreate />} />
          <Route path="about" element={<About />} />
        </Route>
            
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default Routers;
