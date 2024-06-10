const Home = () => {
  return (
    <div className="w-full min-h-screen flex flex-col xl:text-start xl:items-start text-center justify-center items-center xl:pl-[5%] pb-[15%] z-10">
      <h1 className="text-white font-extrabold z-10 xl:text-7xl text-[3rem] font-fugaz_one text-shadow-md mt-14">
        AUTOMOTORES
      </h1>
      <h1 className="text-celeste font-extrabold z-10 xl:text-7xl text-[3rem] font-fugaz_one text-shadow-md">
        SEPTEMDEV
      </h1>
      <p className="text-white z-10 text-lg mb-3 text-shadow-md">
        El lugar donde vas a encontrar a tu mejor compañero.
      </p>
      <div className="flex flex-row items-start gap-6 z-10">
        <button className="border border-celeste py-[5px] w-32 rounded-2xl backdrop-blur-lg shadow-lg font-semibold bg-white text-celeste">
          CONSULTA
        </button>
        <button className="border py-[5px] w-32 rounded-2xl backdrop-blur-lg shadow-lg font-semibold bg-celeste">
          USADOS
        </button>
      </div>
    </div>
  );
};

export default Home;

