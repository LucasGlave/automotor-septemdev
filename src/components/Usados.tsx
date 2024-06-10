import Usado from './Usado';
import cruze from "../assets/cruze.jpeg";
import fordEco from "../assets/fordEco.jpeg";
import fordEdge from "../assets/fordEdge.jpeg";
import FordFusion from "../assets/fordFusion.jpeg"
import fordKuga from "../assets/fordKuga.jpeg";
import onix from "../assets/onix.jpeg"


const Usados = () => {
  return (
    <div className="w-full min-h-screen flex flex-col text-start justify-center z-10">
      <div className="flex flex-col items-center justify-between gap-10 w-full h-[90%] bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.68)] via-50% to-transparent p-[5%] z-10">
        <h2 className="text-white font-extrabold z-10 text-3xl font-roboto text-shadow-md">
          USADOS
        </h2>
        <div className="w-full xl:px-32 h-full flex flex-col gap-8">
          <div className="w-full flex xl:flex-row flex-col items-center justify-between xl:gap-12 gap-8">
            <Usado img={cruze} model="Cruze" price='23.000.000'/>
            <Usado img={fordEco} model='EcoSport' price='20.000.000'/>
            <Usado img={fordKuga} model='Kuga' price='22.000.000'/>
          </div>
          <div className="w-full flex items-center justify-between xl:flex-row flex-col xl:gap-12 gap-8">
            <Usado img={FordFusion} model="Fusion" price='30.000.000'/>
            <Usado img={onix} model='Onix' price='23.000.000'/>
            <Usado img={fordEdge} model='Edge' price='28.000.000'/>
          </div>
        </div>
        <button className="border py-[5px] w-32 rounded-2xl backdrop-blur-lg shadow-lg font-semibold">
          VER TODOS
        </button>
      </div>
    </div>
  );
};

export default Usados;

