import { Routes, Route, Navigate, } from "react-router";
import Homepage from "../component/views/Homepage";
import Contact from "../component/views/Contact";
import Portfolio from "../component/views/Portfolio";
import Services from "../component/views/Services";
import Resumecv from "../component/views/Resumecv";
import HeaderNav from "../component/layaout/HeaderNav";
import Footer from "../component/layaout/Footer";


function MyRoutes() {
  return (
    <>

      {/* HEADER Y NAV */}
      <HeaderNav />
      {/* CONTENIDO CENTRAL */}
      <section className="content">
        
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resumecv" element={<Resumecv />} />
        </Routes>

      </section>
      {/* FOOTER */}
      <Footer />

    </>

  )
}

export default MyRoutes