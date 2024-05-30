import imgNosotros from '../assets/img-nosotros.jpg';

const Usado = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <img src={imgNosotros} alt="nosotros" className="z-10 rounded-xl shadow-2xl" />
      <div className="bg-white rounded-b-lg h-24 w-[85%]"></div>
    </div>
  );
};

export default Usado;
