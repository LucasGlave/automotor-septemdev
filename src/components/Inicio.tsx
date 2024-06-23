import Home from "./Home/Home";
import Nosotros from "./Nosotros/Nosotros";
import Usados from "./Vehiculos/Usados";
import Reseñas from "./Reseñas/Reseñas";
import Contacto from "./Contacto/Contacto";
import camionetaPNG from "../assets/camioneta.png";
import imageBackground from "../assets/fondo.png";
import mobileBackground from "../assets/fondo-2.jpg"
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type InicioProps = {
  id: string;
};

function Inicio({ id }: InicioProps) {
  const [showOverlayImage, setShowOverlayImage] = useState(false);
  const [scrollEnabled, setScrollEnabled] = useState(false);

  useEffect(() => {
    AOS.init();

    const handleScroll = (event: Event) => {
      if (!scrollEnabled) {
        event.preventDefault();
        window.scrollTo(0, 0);
        setShowOverlayImage(true);
        setTimeout(() => {
          setScrollEnabled(true);
        }, 2000);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollEnabled]);

  return (
    <div className="min-h-screen w-full font-roboto scroll-smooth" id={id}>
      <img
        src={imageBackground}
        alt="fondo"
        className="xl:fixed xl:flex w-screen h-screen object-cover z-0 hidden"
      />
      <img
        src={mobileBackground}
        alt="fondo"
        className="xl:hidden w-screen h-screen object-cover z-0 fixed"
      />

      {showOverlayImage && (
        <img
          src={camionetaPNG}
          alt="overlay"
          className="xl:fixed xl:flex w-screen h-screen object-cover z-10 hidden"
          data-aos="fade-left"
          data-aos-duration="2000"
        />
      )}
     
      <Home />
      
      <Usados id="VEHICULOS" />
      <Reseñas id="RESEÑAS" />
      <Nosotros id="NOSOTROS" />
      <Contacto id="CONTACTO" />
    </div>
  );
}

export default Inicio;
