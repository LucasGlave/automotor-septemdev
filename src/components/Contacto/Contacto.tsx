import gmaps from "../../assets/gmaps2.jpeg";
import Title from "../Title";

type ConsultasProps = {
  id: string;
};

const Contacto = ({ id }: ConsultasProps) => {
  return (
    <div
      className="z-20 w-full min-h-screen flex flex-col items-center justify-center gap-5 bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.68)] via-50% to-transparent"
      id={id}
    >
      <div
        className="z-10 relative w-[120%]"
        
      >
        <Title title="CONTACTO" comment="¡No dudes en ponerte en contacto con nosotros!" />
      </div>
     
      <div className="flex xl:w-[90%] md:w-[90%] w-[90%] h-[35rem] flex-col justify-center bg-gradient-to-b from-white via-[rgba(255,255,255,0.68)] via-50% to-white z-10 rounded-xl">
        {/* <h2 className="text-black text-center font-roboto mb-10 xl:text-2xl md:text-2xl text-lg font-semibold">
          ¡No dudes en ponerte en contacto con nosotros!
        </h2> */}
        
        <div className="flex xl:gap-0 md:gap-0 gap-5 xl:flex-row md:flex-row flex-col xl:justify-evenly md:justify-evenly">
          <div className="xl:flex xl:w-[35%] h-[80%] md:flex hidden  items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d789.3337513492598!2d-63.16123643034871!3d-37.68833073696973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95e96b71337d7ed9%3A0x7ca12fa95b2b54af!2sDarregueira%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1681450358577!5m2!1ses!2sar"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-[100%] xl:h-[130%] md:h-[110%] flex  my-auto"
            />
          </div>

          <form className="xl:w-[50%] md:w-[50%] w-full flex flex-col gap-4 items-center justify-center">
            <input
              placeholder="Nombre"
              className="xl:w-[70%] md:w[70%] w-[75%] p-2 border border-black text-black outline-none rounded-lg"
            />
            <input
              placeholder="Email"
              className="xl:w-[70%] md:w-[70%] w-[75%] p-2 border border-black text-black outline-none rounded-lg"
            />
            <textarea
              placeholder="Consulta"
              className="xl:w-[70%] md:w-[70%] w-[75%] min-h-[7rem] p-2 border border-black text-black outline-none rounded-lg"
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
