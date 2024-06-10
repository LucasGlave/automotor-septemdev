type usadoProps = {
  img: string;
  model: string;
  price: string;
};

const Usado = ({ img, model, price }: usadoProps) => {
  return (
    <div className="flex justify-center h-full">
      <div className="flex items-center flex-col justify-center m-auto">
        <img
          src={img}
          alt="nosotros"
          className="z-10 rounded-xl shadow-2xl w-[20rem] h-[13rem] object-cover"
        />
        <div className="bg-[#ffffffcd] rounded-b-lg p-4 xl:w-[85%] w-[85%] flex justify-between text-black">
          <div>
            <p>
              <b>{model}</b>
            </p>
            <p>${price}</p>
          </div>
          <button className="text-white flex mt-2 items-center my-auto justify-center border p-[5px] w-16 text-sm rounded-xl backdrop-blur-lg shadow-lg font-semibold bg-celeste">
            VER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Usado;
