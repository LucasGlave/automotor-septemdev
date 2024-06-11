import Home from './components/Home/Home';
import imageBackground from './assets/fondo-2.jpg';
import Header from './components/Header';
import Nosotros from './components/Nosotros/Nosotros';
import Usados from './components/Vehiculos/Usados';
import Reseñas from './components/Reseñas/Reseñas';
import Consultas from './components/Consultas/Consultas';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full font-roboto">
      <img src={imageBackground} alt="fondo" className="fixed w-screen h-screen object-cover z-0" />
      <Header />
      <Home />
      <Reseñas />
      <Usados />
      <Nosotros />
      <Consultas />
      <Footer />
    </div>
  );
}

export default App;
