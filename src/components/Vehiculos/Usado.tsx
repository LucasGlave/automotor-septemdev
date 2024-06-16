import { FaCalendarAlt, FaTachometerAlt } from "react-icons/fa";


type usadoProps = {
  img?: string;
  year?: string;
  km?: string;
  brand: string;
  model: string;
  price: string;
};

const Usado = ({ img, model, price, brand, year, km }: usadoProps) => {
  return (
    <div className="flex justify-center h-full">
      <div className="flex items-center flex-col justify-center m-auto">
        <a href="/individual-vehiculo" target="e_blank">
          <img
            src={img}
            alt="nosotros"
            className="relative z-20 rounded-xl shadow-2xl w-[20rem] h-[13rem] object-cover hover:scale-105 transform duration-300 cursor-pointer"
          />
        </a>

        <div className="bg-[#ffffffcd] rounded-b-lg p-4 xl:w-[85%] w-[85%] flex justify-between text-black z-10">
          <div>
            <p>
              <b>
                {brand} {model}
              </b>
            </p>
            <div
              className="flex"
            >
              <p className="flex justify-center items-center">
                <FaCalendarAlt className="mr-1 mb-1" />
                {year} |
              </p>
              <p className="flex justify-center items-center"><FaTachometerAlt className="ml-1 mr-1 mb-[0.1rem]"/> {km}km</p>
            </div>

            <p>${price}</p>
          </div>
          <a
            href="/individual-vehiculo"
            target="e_blank"
            className="text-white flex mt-5 items-center my-auto justify-center border p-[5px] w-16 text-sm rounded-xl backdrop-blur-lg shadow-lg font-semibold bg-celeste hover:scale-105 transform duration-300"
          >
            Ver
          </a>
        </div>
      </div>
    </div>
  );
};

export default Usado;
