import Home from './components/Home';
import imageBackground from './assets/fondo-2.jpg';
import Header from './components/Header';
import Nosotros from './components/Nosotros';
import Usados from './components/Usados';
import Reseñas from './components/Reseñas';
import Consultas from './components/Consultas';

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
    </div>
  );
}

export default App;
