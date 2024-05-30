const Home = () => {
  return (
    <div className="w-full min-h-screen flex flex-col text-start justify-center pl-[5%] pb-[15%] z-10">
      <h1 className="text-white font-extrabold z-10 text-7xl font-roboto text-shadow-md">
        AUTOMOTORES
      </h1>
      <h1 className="text-celeste font-extrabold z-10 text-7xl font-roboto text-shadow-md">
        SEPTEMDEV
      </h1>
      <p className="text-white z-10 text-lg mb-3 text-shadow-md">
        El lugar donde vas a encontrar a tu mejor compañero.
      </p>
      <div className="flex flex-row items-start gap-6 z-10">
        <button className="border py-[5px] w-32 rounded-2xl backdrop-blur-lg shadow-lg font-semibold">
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
