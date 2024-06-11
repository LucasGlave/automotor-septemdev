const Home = () => {
  return (
    <div className="w-full min-h-screen gap-5 flex flex-col xl:text-start md:items-start items-center text-center justify-center pl-[5%] pb-[15%] z-10">
      <div className="xl:text-start md:text-start z-10">
        <h1 className="text-white font-extrabold z-10 xl:text-7xl md:text-5xl text-[2.5rem] font-fugaz_one text-shadow-md ">
          AUTOMOTORES
        </h1>
        <h1 className="text-celeste font-extrabold z-10 xl:text-7xl md:text-5xl text-[2.5rem] font-roboto text-shadow-md xl:mt-[-15px] md:mt-[-10px] mt-[-20px]">
          SEPTEMDEV
        </h1>
      </div>
      <p className="text-white z-10 text-lg mb-2 text-shadow-md">
        El lugar donde vas a encontrar a tu mejor compañero.
      </p>
      <div className="flex flex-row items-center xl:mr-auto gap-6 z-10">
        <button className="border-2 border-celeste text-celeste bg-white py-[5px] w-32 rounded-2xl backdrop-blur-lg shadow-lg font-semibold hover:scale-105 transform duration-300">
          CONSULTA
        </button>
        <button className="border-2 py-[5px] w-32 rounded-2xl backdrop-blur-lg shadow-lg font-semibold bg-celeste hover:scale-105 transform duration-300">
          VEHÍCULOS
        </button>
      </div>
    </div>
  );
};

export default Home;

