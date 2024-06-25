import Title from "../Title";
import Reseña from "./Reseña";
import { reseñas } from "./reseñasData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

type ReseñasProps = {
  id: string;
};

const Reseñas = ({ id }: ReseñasProps) => {
  return (
    <div
      className="w-full min-h-40 flex flex-col xl:text-start xl:items-start text-center justify-center items-center pb-[15%] z-10 gap-5"
      id={id}
    >
      <div className="flex flex-col justify-center items-center z-10 relative m-auto mt-16 xl:mt-0 md:mt-12">
        <Title title="RESEÑAS" comment="Los clientes opinaron" />
      </div>
      {/* swiper dekstop */}
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="z-20 xl:px-6 xl:py-6 xl:w-[90%] md:px-6 md:py-6 md:w-full xl:flex md:flex hidden items-center justify-center relative group rounded-xl m-auto bg-transparent"
      >
        <div className="flex justify-center items-center w-full">
          <div className="xl:w-[80%] md:w-full  flex gap-6 justify-center m-auto xl:flex-row lg:flex-row md:flex-col flex-col">
            {reseñas.map((client, index) => (
              <SwiperSlide key={index}>
                <Reseña
                  name={client.name}
                  opinion={client.opinion}
                  img={client.img}
                  rating={client.rating}
                />
              </SwiperSlide>
            ))}
          </div>
        </div>
      </Swiper>

      {/* swiper mobile */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="z-20 px-6 py-6 w-[80%]  xl:hidden md:hidden flex items-center justify-center relative group rounded-xl m-auto bg-transparent"
      >
        <div className="flex justify-center items-center w-full">
          <div className="xl:w-[80%] md:w-full  flex gap-6 justify-center m-auto xl:flex-row lg:flex-row md:flex-col flex-col">
            {reseñas.map((client, index) => (
              <SwiperSlide key={index}>
                <Reseña
                  name={client.name}
                  opinion={client.opinion}
                  img={client.img}
                  rating={client.rating}
                />
              </SwiperSlide>
            ))}
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Reseñas;
