import imageBackground from "./assets/fondo-2.jpg";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Vehiculos from "./components/Vehiculos/Vehiculos";
import Inicio from "./components/Inicio";

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full font-roboto">
        <img
          src={imageBackground}
          alt="fondo"
          className="fixed w-screen h-screen object-cover z-0"
        />
        <Header />
        <Routes>
          <Route path="/" element={<Inicio id="INICIO" />} />
          <Route path="/vehiculos" element={<Vehiculos />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
