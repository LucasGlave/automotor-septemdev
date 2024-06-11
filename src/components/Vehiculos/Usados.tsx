import Usado from "./Usado";
import { vehiculos } from "./dataVehiculos";


const Usados = () => {
  return (
    <div className="w-full min-h-screen flex flex-col text-start justify-center z-10">
      <div className="flex flex-col items-center justify-center gap-10 w-full  h-[90%] bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.68)] via-50% to-transparent p-[5%] z-10">
        <h2 className="text-white font-extrabold z-10 text-3xl font-roboto text-shadow-md">
          VEHÍCULOS
        </h2>
        <div className=" m-auto flex items-center justify-center">
          <div className="w-[75%] flex flex-wrap gap-8 m-auto justify-center">
            {vehiculos.map((vehiculo, index) => (
              <Usado key={index} img={vehiculo.img} brand={vehiculo.marca} model={vehiculo.modelo} price={vehiculo.precio} />
            ))}
          </div>
        </div>

        <button className="border py-[5px] w-32 rounded-2xl backdrop-blur-lg shadow-lg font-semibold hover:scale-105 transform duration-300">
          VER TODOS
        </button>
      </div>
    </div>
  );
};

export default Usados;
