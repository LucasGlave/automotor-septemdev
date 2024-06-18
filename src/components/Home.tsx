import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full min-h-screen gap-5 flex flex-col text-start justify-center pl-[5%] pb-[15%] z-10">
 
      <div className="text-start z-10" >
        <h1 className="text-white font-extrabold z-10 text-7xl font-fugaz_one text-shadow-md" data-aos="fade" data-aos-duration="1600">
          AUTOMOTORES
        </h1>
        <h1 className="text-celeste font-extrabold z-10 text-7xl font-roboto text-shadow-md mt-[-15px]" data-aos="fade" data-aos-duration="1600">
          SEPTEMDEV
        </h1>
      </div>
      <p className="text-white z-10 text-lg mb-2 text-shadow-md" data-aos="fade" data-aos-duration="1600" data-aos-delay="300">
        El lugar donde vas a encontrar a tu mejor compañero.
      </p>
      <div className="flex flex-row items-center mr-auto gap-6 z-10">
        <button className=" bg-gray-image py-[5px] w-32 rounded-2xl backdrop-blur-lg shadow-lg font-semibold" data-aos="fade" data-aos-duration="1600" data-aos-delay="500">
          CONSULTA
        </button>
        <button className="py-[5px] w-32 rounded-2xl backdrop-blur-lg shadow-lg font-semibold bg-azul-image" data-aos="fade" data-aos-duration="1600" data-aos-delay="500">
          USADOS
        </button>
      </div>
    </div>
  );
};

export default Home;
