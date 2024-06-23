import Title from "../Title";
import Reseña from "./Reseña";
import { reseñas } from "./reseñasData";

type ReseñasProps = {
  id: string;
};

const Reseñas = ({ id }: ReseñasProps) => {
  return (
    <div
      className="w-full min-h-40 flex flex-col xl:text-start xl:items-start text-center justify-center items-center pb-[15%] z-10 gap-5"
      id={id}
    >
      {/* <div className="flex flex-col items-center m-auto gap-3 md:mt-20">
        <h2
          className="text-white font-extrabold z-10 text-3xl font-roboto text-shadow-md mr-10"
          data-aos="fade"
          data-aos-duration="1800"
          data-aos-delay="200"
        >
          RESEÑAS
        </h2>
        <p className="text-center z-10 mr-10 text-xl font-fugaz_one">Los clientes opinaron sobre nosotros</p>
      </div> */}

      <div
        className="flex flex-col justify-center items-center z-10 relative m-auto mt-16 xl:mt-0 md:mt-12"
      >
        <Title title="RESEÑAS" comment="Los clientes opinaron" />
      </div>

      
      <div className="flex justify-center items-center w-full">
        <div className="xl:w-[85%] md:w-[90%]  flex gap-6 justify-center m-auto xl:flex-row lg:flex-row md:flex-col flex-col">
          {reseñas.slice(0, 3).map((client, index) => (
            <Reseña
              key={index}
              name={client.name}
              opinion={client.opinion}
              img={client.img}
              rating={client.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reseñas;
