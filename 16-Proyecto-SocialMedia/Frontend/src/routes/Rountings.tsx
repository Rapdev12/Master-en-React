import MainLayout from "../layout/MainLayout";
import { Home } from "../pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function Routings() {
  return (
    <BrowserRouter>

      {/*Contenido Central */}
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Route>

        <Route path="*" element={
          <div className="not-found-container" style={{ textAlign: "center", padding: "50px" }}>
            <h1>Error 404</h1>
            <p>The page you are looking for does not exist or has been moved.</p>
          </div>
        } />
      </Routes>

    </BrowserRouter>


  )
}

export default Routings