import { vehiculos } from "./dataVehiculos";
import Usado from "./Usado";
import imageBackground from "../../assets/fondo-2.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Vehiculos() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col z-10 mb-28">
      <img
        src={imageBackground}
        alt="fondo"
        className="fixed w-screen h-screen object-cover z-0"
      />
      <div className="flex flex-col xl:mt-8 md:mt-12 mt-16  items-center justify-center gap-10 w-full h-[90%] bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.68)] via-50% to-transparent p-[5%] z-10">
        <h2 className="text-white font-extrabold z-10 text-3xl font-roboto text-shadow-md" data-aos="fade" data-aos-duration="1700" data-aos-delay="200">
          VEHÍCULOS
        </h2>
      </div>
      <div className="flex justify-center items-center w-full">
        <div className="w-[80%] justify-center flex flex-wrap gap-8 text-start" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
          {vehiculos.map((vehiculo, index) => (
            <Usado
              key={index}
              img={vehiculo.img[0]}
              year={vehiculo.año}
              km={vehiculo.km}
              brand={vehiculo.marca}
              model={vehiculo.modelo}
              price={vehiculo.precio}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Vehiculos;
