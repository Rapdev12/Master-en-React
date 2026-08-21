import { Route } from "react-router";
import { Routes, NavLink  } from "react-router";
import Home from "../component/Home";
import About from "../component/About";
import Contact from "../component/Contact";
import Product from "../component/Product";
import Login from "../component/Login";


function AppRouter() {
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
              to="/product"
              className={({ isActive }) => (isActive ? "newLetter" : "")}
            >
              Product
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
              to="/about"
              className={({ isActive }) => (isActive ? "newLetter" : "")}
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "newLetter" : "")}
            >
              Login
            </NavLink>
          </li>
          
        </ul>
      </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product" element={<Product />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="*"
                    element={(
                        <div>
                            <h1>Error 404 page</h1>
                        </div>
                    )}
                />
            </Routes>


        </>
    )
}

export default AppRouter