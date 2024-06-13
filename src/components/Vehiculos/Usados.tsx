import Usado from "./Usado";
import { vehiculos } from "./dataVehiculos";

type VehiculosProps = {
  id: string
}

const Usados = ({id} : VehiculosProps) => {
  return (
    <div className="w-full min-h-screen flex flex-col text-start justify-center z-10" id={id}>
      <div className="flex flex-col gap-10 items-center justify-center w-full  h-full bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.68)] via-50% to-transparent  z-10">
        <h2 className="text-white font-extrabold z-10 text-3xl font-roboto text-shadow-md">
          VEHÍCULOS
        </h2>
        <div className="flex justify-center items-center w-full">
          <div className="w-[80%] justify-center flex xl:flex-row flex-col  flex-wrap gap-8 text-start">
            {vehiculos.slice(0, 3).map((vehiculo, index) => (
              <Usado
                key={index}
                img={vehiculo.img}
                brand={vehiculo.marca}
                model={vehiculo.modelo}
                price={vehiculo.precio}
              />
            ))}
          </div>
        </div>
        <a href="/vehiculos" target="e_blank">
          <button className="border py-[5px] flex mx-auto mt-4  items-center justify-center w-32 rounded-2xl backdrop-blur-lg shadow-lg font-semibold hover:scale-105 transform duration-300">
            VER TODOS
          </button>
        </a>
      </div>
    </div>
  );
};

export default Usados;
