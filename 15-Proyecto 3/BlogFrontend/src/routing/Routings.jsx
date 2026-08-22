import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home"
import Articles from '../components/pages/Articles';
import EditArticles from '../components/pages/EditArticles';
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
              <Route path="/edit" element={<EditArticles />} />
              <Route path="/create" element={<CreateArticles />} />
              <Route path="/aboutme" element={<Aboutme />} />

            </Routes>


            
          </main>
        </div>
        <Footer />
      

    </BrowserRouter>


  )
}

export default Routings