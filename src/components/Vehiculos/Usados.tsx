import Usado from "./Usado";
import { vehiculos } from "./dataVehiculos";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Title from "../Title";
import { useNavigate } from "react-router-dom";

type VehiculosProps = {
  id: string;
};

const Usados = ({ id }: VehiculosProps) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const navigate = useNavigate();

  return (
    <div
      className="w-full min-h-screen flex flex-col text-start justify-center z-10"
      id={id}
    >
      <div className="flex flex-col gap-10 items-center justify-center w-full h-full bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.68)] via-50% to-transparent z-10">
        <div
          className="flex flex-col justify-center items-center z-10 relative"
          data-aos="fade"
          data-aos-duration="1600"
        >
          <Title title="VEHÍCULOS" comment="Encontrá tu auto" />
        </div>

        <div className="flex justify-center items-center w-full">
          <div
            className="w-[80%] justify-center flex xl:flex-row flex-col flex-wrap gap-8 text-start"
            data-aos="fade"
            data-aos-duration="2000"
            data-aos-delay="300"
          >
            {vehiculos.slice(0, 3).map((vehiculo, index) => (
              <Usado
                key={index}
                img={vehiculo.img[0]}
                year={vehiculo.año}
                km={vehiculo.km}
                brand={vehiculo.marca}
                model={vehiculo.modelo}
                price={vehiculo.precio}
                onClick={() => navigate(`/individual-vehiculo/${vehiculo.id}`)}
              />
            ))}
          </div>
        </div>
        <a href="/vehiculos" target="e_blank">
          <button
            className="bg-gray-image py-[5px] w-32 flex items-center justify-center rounded-2xl backdrop-blur-lg shadow-lg font-semibold hover:scale-105 transform duration-300 cursor-pointer"
            data-aos="fade"
            data-aos-duration="1900"
            data-aos-delay="400"
          >
            Ver todos
          </button>
        </a>
      </div>
    </div>
  );
};

export default Usados;
