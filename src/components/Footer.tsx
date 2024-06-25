import { IoLogoInstagram } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoLogoTiktok } from "react-icons/io5";
import logo from "../assets/carDreamsLogo.png"

function Footer() {
  return (
    <div className="flex flex-col items-center justify-start w-screen pb-6  bg-gradient-to-b from-transparent to-white z-20 absolute text-black">
      {/* <div className="flex flex-col text-center justify-start">
        <h1 className="text-white font-extrabold z-10  text-[2rem] font-fugaz_one text-shadow-md">
          AUTOMOTORES
        </h1>
        <h1 className="text-celeste font-extrabold z-10  text-[2rem] font-fugaz_one text-shadow-md">
          SEPTEMDEV
        </h1>
      </div> */}
      {/* <img src={logo} className="w-[12rem]"/> */}
      <div className="flex flex-col xl:gap-5 md:gap-5 gap-2 items-center justify-start w-screen">
        <div className="flex flex-row xl:gap-20 md:gap-20 gap-3 justify-center items-center mx-2">
          <h3 className="cursor-pointer">NOSOTROS</h3>
          <h3 className="cursor-pointer">AUTOS</h3>
          <h3 className="cursor-pointer">CAMIONETAS</h3>
          <h3 className="cursor-pointer">CONTACTO</h3>
        </div>

      <div className="flex gap-12 items-center xl:justify-evenly md:justify-evenly xl:w-[30%] md:w-[30%] mx-auto">
        <div className="flex text-2xl gap-5">
          <a className="flex p-2 justify-center items-center bg-white rounded-full cursor-pointer hover:scale-110  transform duration-300" target="e_blank">
          <IoLogoInstagram />
        </a>
        <a className="flex p-2 bg-white rounded-full cursor-pointer hover:scale-110 transform duration-300" target="e_blank">
          <IoLogoTiktok />
        </a>
        <a className="flex p-2 bg-white rounded-full cursor-pointer hover:scale-110 transform duration-300" target="e_blank">
          <IoMailOutline />
        </a>
        </div>
        

        <div className="flex">
        <img src={logo} className="w-[6rem] xl:scale-150 md:scale-150 scale-125"/>
        </div>
      </div>

      <div className="flex text-center xl:mx-0 md:mx-0 mx-2">
        <p className="font-roboto">
          Copyright © SeptemDev Studio |{" "}
          <a target="e_blank" className="  cursor-pointer hover:underline hover:text-celeste">
            Políticas de Privacidad
          </a>
        </p>
      </div>
      </div>
      
    </div>
  );
}

export default Footer;
