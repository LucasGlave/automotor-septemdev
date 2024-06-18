import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Vehiculos from "./components/Vehiculos/Vehiculos";
import Inicio from "./components/Inicio";
import Vehiculo from "./components/Vehiculos/Vehiculo";

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full font-roboto relative scroll-smooth bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.68)] via-50% to-transparent">
        <Header />
        <Routes>
          <Route path="/" element={<Inicio id="INICIO" />} />
          <Route path="/vehiculos" element={<Vehiculos />} />
          <Route path="/individual-vehiculo" element={<Vehiculo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
