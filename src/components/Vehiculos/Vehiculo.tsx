import { vehiculos } from "./dataVehiculos";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const Vehiculo = () => {
  return (
    <div className="bg-black w-full flex flex-col xl:flex-row md:flex-row items-center justify-evenly">
      {vehiculos.slice(0, 1).map((vehiculo, index) => (
        <div
          key={index}
          className="z-10 flex flex-col xl:flex-row md:flex-row items-center mt-28 mb-28 gap-4 px-8 w-full relative justify-evenly"
        >
          <div className="xl:w-[30%] md:w-[30%] w-[90%] flex items-center justify-center z-10 relative">
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
          <div className="xl:w-[60%] md:w-[60%] w-full flex flex-col gap-8 z-10 backdrop-blur-lg xl:p-5 md:p-5 py-2 px-3 rounded-lg xl:mx-8 relative">
            <b className="text-center text-xl text-white">
              {vehiculo.marca} {vehiculo.modelo}
            </b>
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
              <p>{vehiculo.km} km</p>
              <p>${vehiculo.precio}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Vehiculo;
