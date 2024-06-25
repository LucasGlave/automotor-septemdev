import { vehiculos } from "./dataVehiculos";
import Usado from "./Usado";
import imageBackground from "../../assets/fondo-2.jpg";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Vehiculos() {
  useEffect(() => {
    AOS.init();
  }, []);

  const handleBackButtonClick = () => {
    window.history.back();
  };

  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex flex-col z-10 mb-28">
      <img
        src={imageBackground}
        alt="fondo"
        className="fixed w-screen h-screen object-cover z-0"
      />
      <div className="flex flex-col xl:mt-8 md:mt-12 mt-16  justify-center gap-10 w-full h-[90%] bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.68)] via-50% to-transparent p-[5%] z-10">
        <h2
          className="text-white font-extrabold z-10 text-3xl font-roboto text-shadow-md flex m-auto"
          data-aos="fade"
          data-aos-duration="1700"
          data-aos-delay="200"
        >
          VEHÍCULOS
        </h2>{" "}
      </div>
      <div className="flex justify-center items-center w-full">
        <div
          className="w-[80%] flex flex-col items-start gap-8 text-start"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="300"
        >
          <div className="w-[90%] flex m-auto">
            <button
              onClick={handleBackButtonClick}
              className="flex bg-transparent text-white z-10 text-xl gap-1 items-center "
              data-aos="fade"
              data-aos-duration="2000"
              data-aos-delay="300"
            >
              <IoArrowBackCircleOutline /> volver
            </button>
          </div>

          <div className="flex flex-wrap justify-center w-full gap-8">
            {vehiculos.map((vehiculo, index) => (
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
      </div>
    </div>
  );
}

export default Vehiculos;
