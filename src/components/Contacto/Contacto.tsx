import gmaps from "../../assets/gmaps2.jpeg";

type ConsultasProps = {
  id: string;
};

const Contacto = ({ id }: ConsultasProps) => {
  return (
    <div className="z-20 w-full min-h-screen flex flex-col items-center justify-center gap-5 bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.68)] via-50% to-transparent" id={id}>
      <h2 className="text-white text-center font-extrabold z-10 text-3xl font-roboto text-shadow-md">
        CONTACTO
      </h2>
      <div className="flex xl:w-[80%] md:w-[80%] w-[90%] flex-col pb-16 pt-8 mx-auto bg-gradient-to-b from-white via-[rgba(255,255,255,0.68)] via-50% to-white z-10">
        <h2 className="text-black text-center font-roboto mb-5 xl:text-2xl md:text-2xl text-lg font-semibold">
          ¡No dudes en ponerte en contacto con nosotros!
        </h2>
        <div className="flex xl:gap-0 md:gap-0 gap-5 xl:flex-row md:flex-row flex-col xl:justify-evenly">
          <div className="xl:flex md:flex hidden pt-4 items-center justify-center">
            <img src={gmaps} className="w-[90%] xl:h-[20rem] md:h-[20rem] flex  my-auto" />
          </div>

          <form className="xl:w-[50%] md:w-[50%] w-full flex flex-col gap-4 items-center justify-center">
            <input
              placeholder="Nombre"
              className="xl:w-[70%] md:w[70%] w-[75%] p-2 border border-black text-black"
            />
            <input
              placeholder="Email"
              className="xl:w-[70%] md:w-[70%] w-[75%] p-2 border border-black text-black"
            />
            <textarea
              placeholder="Consulta"
              className="xl:w-[70%] md:w-[70%] w-[75%] min-h-[7rem] p-2 border border-black text-black"
            />
            <button className="py-[5px] w-32 flex items-center justify-center rounded-2xl backdrop-blur-lg shadow-lg font-semibold bg-azul-image hover:scale-105 transform duration-300 cursor-pointer">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
