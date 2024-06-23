import { vehiculos } from "./dataVehiculos";
import imageBackground from "../../assets/fondo-2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import {
  FaCalendarAlt,
  FaTachometerAlt,
  FaCarAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Vehiculo = () => {
  const handleBackButtonClick = () => {
    window.history.back();
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <img
        src={imageBackground}
        alt="fondo"
        className="fixed w-screen h-full object-cover z-0"
      />
      <div className="w-[80%] flex flex-col items-start">
        <button
          onClick={handleBackButtonClick}
          className="flex bg-transparent text-white z-10 text-xl gap-1 items-center mb-5"
        >
          <IoArrowBackCircleOutline /> volver
        </button>
        {vehiculos.slice(0, 1).map((vehiculo, index) => (
          <div
            key={index}
            className="z-10 flex flex-col xl:flex-row md:flex-col items-center mt-8 mb-8 gap-4 w-full relative"
          >
            <div
              className="xl:w-[33%] md:w-[70%] w-[90%] flex items-center justify-center z-10 relative m-auto"
              data-aos="fade"
              data-aos-duration="1900"
              data-aos-delay="300"
            >
              <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                pagination={{ clickable: true }}
                modules={[EffectFade, Navigation, Pagination]}
                className="w-full flex items-center justify-center relative group rounded-xl"
              >
                {Array.isArray(vehiculo.img) &&
                  vehiculo.img.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={image}
                        alt={`Cruze image ${index + 1}`}
                        className="flex w-full xl:h-[21rem] h-[10rem] md:h-[15rem] m-auto shadow-2xl items-center justify-center"
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
            <div
              className="flex flex-col gap-4"
              data-aos="fade"
              data-aos-duration="1900"
              data-aos-delay="300"
            >
              <div className="xl:w-[95%] md:w-[95%] w-full flex flex-col xl:gap-4 md:gap-4 gap-2 z-10 backdrop-blur-lg xl:p-5 md:p-5 py-2 px-3 rounded-lg xl:mx-8 relative m-auto">
                <b
                  className="text-center xl:text-2xl md:text-2xl text-xl text-white"
                  data-aos="fade"
                  data-aos-duration="1700"
                  data-aos-delay="400"
                >
                  {vehiculo.marca} {vehiculo.modelo}
                </b>
                <div className="flex flex-col justify-center gap-2 items-center">
                  <p
                    className="xl:text-xl md:text-xl text-lg font-bold"
                    data-aos="fade"
                    data-aos-duration="1700"
                    data-aos-delay="600"
                  >
                    ${vehiculo.precio}
                  </p>
                  <div
                    className="flex xl:gap-12 md:gap-12 gap-8"
                    data-aos="fade"
                    data-aos-duration="1700"
                    data-aos-delay="800"
                  >
                    <p className="flex justify-center items-center">
                      <FaCalendarAlt className="mr-1" />
                      {vehiculo.año}
                    </p>
                    <p className="flex justify-center items-center">
                      <FaTachometerAlt className="ml-1 mr-1 mb-[0.1rem]" />{" "}
                      {vehiculo.km}km
                    </p>
                    <p className="flex justify-center items-center">
                      <FaCarAlt className="mr-1 mb-[0.1rem]" /> {vehiculo.tipo}
                    </p>
                  </div>
                </div>

                <div className="text-start flex flex-col gap-5 text-white">
                  <p
                    data-aos="fade"
                    data-aos-duration="1700"
                    data-aos-delay="800"
                  >
                    <b>Conectividad: </b>
                    {vehiculo.conectividad}
                  </p>
                  <p
                    data-aos="fade"
                    data-aos-duration="1700"
                    data-aos-delay="900"
                  >
                    <b>Diseño: </b>
                    {vehiculo.diseño}
                  </p>
                  <p
                    data-aos="fade"
                    data-aos-duration="1700"
                    data-aos-delay="1000"
                  >
                    <b>Asistencia: </b>
                    {vehiculo.asistencia}
                  </p>
                  <p
                    data-aos="fade"
                    data-aos-duration="1700"
                    data-aos-delay="1100"
                  >
                    <b>Practicidad: </b>
                    {vehiculo.practicidad}
                  </p>
                </div>
              </div>
              <button
                className="py-[5px] xl:ml-8 md:ml-8 w-32 flex items-center justify-center rounded-2xl backdrop-blur-lg shadow-lg font-semibold bg-azul-image hover:scale-105 transform duration-300 cursor-pointer"
                data-aos="fade"
                data-aos-duration="1700"
                data-aos-delay="1200"
              >
                <FaWhatsapp className="mr-2 scale-125" />
                Consultar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vehiculo;
