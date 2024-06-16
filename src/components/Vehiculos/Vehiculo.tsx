import { vehiculos } from "./dataVehiculos";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { FaCalendarAlt, FaTachometerAlt, FaCarAlt, FaWhatsapp } from "react-icons/fa";

const Vehiculo = () => {
  return (
    <div className="bg-black w-full flex flex-col xl:flex-row md:flex-row items-center justify-evenly">
      {vehiculos.slice(0, 1).map((vehiculo, index) => (
        <div
          key={index}
          className="z-10 flex flex-col xl:flex-row md:flex-row items-center mt-28 mb-28 gap-4 px-8 w-full relative justify-evenly"
        >
          <div className="xl:w-[40%] md:w-[40%] w-[90%] flex items-center justify-center z-10 relative">
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
                      className="flex w-full xl:h-[21rem] h-[10rem]  m-auto shadow-2xl items-center justify-center "
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          <div className="flex flex-col gap-4">
            <div className="xl:w-[95%] md:w-[95%] w-full flex flex-col gap-4 z-10 backdrop-blur-lg xl:p-5 md:p-5 py-2 px-3 rounded-lg xl:mx-8 relative">
              <b className="text-center text-2xl text-white">
                {vehiculo.marca} {vehiculo.modelo}
              </b>
              <div className="flex flex-col justify-center gap-2 items-center">
                <p className="text-xl font-bold">${vehiculo.precio}</p>
                <div className="flex gap-12">
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
                <p>
                  <b>Conectividad: </b>
                  {vehiculo.conectividad}
                </p>
                <p>
                  <b>Diseño: </b>
                  {vehiculo.diseño}
                </p>
                <p>
                  <b>Asistencia: </b>
                  {vehiculo.asistencia}
                </p>
                <p>
                  <b>Practicidad: </b>
                  {vehiculo.practicidad}
                </p>
              </div>
            </div>
            <button className="py-[5px] xl:ml-8 md:ml-8 w-32 flex items-center justify-center rounded-2xl backdrop-blur-lg shadow-lg font-semibold bg-azul-image hover:scale-105 transform duration-300 cursor-pointer"><FaWhatsapp className="mr-2 scale-125" />Consultar</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Vehiculo;
