import { vehiculos } from "./dataVehiculos";
import Usado from "./Usado";
import imageBackground from "../../assets/fondo-2.jpg";
// import { IoArrowBackCircleOutline } from "react-icons/io5";
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
        <div className="flex justify-center items-center w-full">
          <div
            className="w-[80%] flex flex-col items-start gap-8 text-start"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="300"
          >
            <div className="w-[95%] flex m-auto" >
              <button
                type="button"
                className="bg-white text-center w-28 rounded-2xl h-8 relative font-sans text-black text-xl font-semibold group"
                onClick={handleBackButtonClick}
              >
                <div className="bg-azul-image rounded-xl h-6 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[104px] z-10 duration-500">
                  <svg
                    width="16px"
                    height="16px"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#000000"
                      d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                    ></path>
                    <path
                      fill="#000000"
                      d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                    ></path>
                  </svg>
                </div>
                <p className="translate-x-2 text-sm">Volver</p>
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
                  onClick={() =>
                    navigate(`/individual-vehiculo/${vehiculo.id}`)
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vehiculos;
