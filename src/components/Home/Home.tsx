import { Link  } from 'react-scroll';

const Home = () => {
  return (
    <div className="w-full min-h-screen gap-5 flex flex-col xl:text-start md:text-start text-center justify-center pl-[5%] pb-[15%] z-10">
      <div className="xl:text-start md:text-start text-center z-10">
        <h1 className="text-white font-extrabold z-10 xl:text-7xl md:text-6xl text-5xl font-fugaz_one text-shadow-md">
          CAR
        </h1>
        <h1 className="text-celeste font-extrabold z-10 xl:text-7xl md:text-6xl text-5xl font-roboto text-shadow-md xl:mt-[-15px] md:mt-[-10px]">
          DREAMS
        </h1>
      </div>
      <p className="text-white z-10 text-lg mb-2 text-shadow-md font-fugaz_one">
      ¡Encontra el auto que estas buscando!
      </p>
      <div className="flex flex-row items-center xl:mr-auto md:mr-auto justify-center  gap-6 z-10">
        <Link to="VEHICULOS" smooth={true} duration={500} className="py-[5px] w-32 flex items-center justify-center rounded-2xl backdrop-blur-lg shadow-lg font-semibold font-fugaz_one bg-azul-image hover:scale-105 transform duration-300 cursor-pointer">
          Vehículos
        </Link>
        <Link to="CONTACTO" smooth={true} duration={500} className=" bg-gray-image py-[5px] w-32 flex items-center justify-center rounded-2xl backdrop-blur-lg shadow-lg font-semibold font-fugaz_one hover:scale-105 transform duration-300 cursor-pointer">
          Contacto
        </Link>
      </div>
    </div>
  );
};

export default Home;
