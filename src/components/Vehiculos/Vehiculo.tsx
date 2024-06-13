import { vehiculos } from "./dataVehiculos";

const Vehiculo = () => {
  return (
    <div className="w-full flex xl:flex-row md:flex-row flex-col items-center xl:justify-evenly md:justify-evenly">
      {vehiculos.slice(0, 1).map((vehiculo, index) => (
        <div key={index} className="flex flex-col xl:flex-row md:flex-row items-center xl:mt-32 mb-24 justify-around">
          <div className="xl:w-[50%] flex items-center justify-center z-10">
            <img src={vehiculo.img} className="flex m-auto shadow-2xl" alt={`${vehiculo.marca} ${vehiculo.modelo}`} />
          </div>
          <div className="xl:w-[50%] md:w-[50%] w-[80%] flex flex-col gap-8 z-10 backdrop-blur-lg p-5 rounded-lg mr-8">
            <b className="text-center text-xl">
              {vehiculo.marca} {vehiculo.modelo}
            </b>
            <div className="text-start flex flex-col gap-5">
              <p>
                <b>Conectividad: </b>
                {vehiculo.conectividad}
              </p>
              <p>
                <b>Diseño: </b>
                {vehiculo.diseño}
              </p>
              <p>
                <b>Asistencia: </b>
                {vehiculo.asistencia}
              </p>
              <p>
                <b>Practicidad: </b>
                {vehiculo.practicidad}
              </p>
              <p>{vehiculo.km} km</p>
              <p>${vehiculo.precio}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default Vehiculo;
