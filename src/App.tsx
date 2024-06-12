import Home from "./components/Home/Home";
import imageBackground from "./assets/fondo-2.jpg";
import Header from "./components/Header";
import Nosotros from "./components/Nosotros/Nosotros";
import Usados from "./components/Vehiculos/Usados";
import Reseñas from "./components/Reseñas/Reseñas";
import Consultas from "./components/Consultas/Consultas";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Vehiculos from "./components/Vehiculos/Vehiculos";

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full font-roboto">
        <img
          src={imageBackground}
          alt="fondo"
          className="fixed w-screen h-screen object-cover z-0"
        />
        <Header />{" "}
        <Routes>
          <Route path="/vehiculos" element={<Vehiculos />} />
        </Routes>
        <Home />
        <Reseñas />
        <Usados />
        <Nosotros />
        <Consultas />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
