import Usado from './Usado';

const Usados = () => {
  return (
    <div className="w-full min-h-screen flex flex-col text-start justify-center z-10">
      <div className="flex flex-col items-center justify-between gap-10 w-full h-full bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.68)] via-50% to-transparent p-[5%] z-10">
        <h2 className="text-white font-extrabold z-10 text-3xl font-roboto text-shadow-md">
          USADOS
        </h2>
        <div className="w-full h-full flex flex-col gap-12">
          <div className="w-full h-1/2 flex items-center justify-between flex-row gap-12">
            <Usado />
            <Usado />
            <Usado />
          </div>
          <div className="w-full h-1/2 flex items-center justify-between flex-row gap-12">
            <Usado />
            <Usado />
            <Usado />
          </div>
        </div>
        <button className="border py-[5px] w-32 rounded-2xl backdrop-blur-lg shadow-lg font-semibold">
          VER TODOS
        </button>
      </div>
    </div>
  );
};

export default Usados;
