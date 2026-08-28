import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home"
import Articles from '../components/pages/Articles';
import CreateArticles from '../components/pages/CreateArticles';
import Header from "../components/layout/Header";
import Navs from "../components/layout/Navs";
import Footer from '../components/layout/Footer';
import Aboutme from "../components/pages/Aboutme";
// Importamos los estilos del layout
import '../App.css';




function Routings() {
  return (
    <BrowserRouter>
      <div className="app-container">
        {/* 1. Header arriba de todo */}
        <Header />
        {/* 2. Barra de navegación justo debajo del Header */}
        <Navs />


        <main className="main-content">

          {/*Contenido Central */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/create" element={<CreateArticles />} />
            <Route path="/aboutme" element={<Aboutme />} />
            <Route path="*" element={
              <div className="not-found-container" style={{ textAlign: "center", padding: "50px" }}>
                <h1>Error 404</h1>
                <p>The page you are looking for does not exist or has been moved.</p>
              </div>
            } />

          </Routes>



        </main>
      </div>
      <Footer />


    </BrowserRouter>


  )
}

export default Routings