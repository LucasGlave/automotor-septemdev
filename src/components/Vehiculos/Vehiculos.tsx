import { vehiculos } from "./dataVehiculos";
import Usado from "./Usado";

function Vehiculos() {
  return (
    <div className="w-full min-h-screen flex flex-col z-10">
      <div className="flex flex-col xl:mt-8 md:mt-12 mt-16  items-center justify-center gap-10 w-full h-[90%] bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.68)] via-50% to-transparent p-[5%] z-10">
        <h2 className="text-white font-extrabold z-10 text-3xl font-roboto text-shadow-md">
          VEHÍCULOS
        </h2>
      </div>
      <div className="flex justify-center items-center w-full">
        <div className="w-[80%] justify-center flex flex-wrap gap-8 text-start">
          {vehiculos.map((vehiculo, index) => (
            <Usado
              key={index}
              img={vehiculo.img[0]}
              year={vehiculo.año}
              km={vehiculo.km}
              brand={vehiculo.marca}
              model={vehiculo.modelo}
              price={vehiculo.precio}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Vehiculos;
