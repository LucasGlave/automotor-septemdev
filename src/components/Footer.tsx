import { IoLogoInstagram } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoLogoTiktok } from "react-icons/io5";

function Footer() {
  return (
    <div className="flex flex-col gap-5 items-center justify-start w-screen pb-6  bg-gradient-to-b from-transparent to-white z-20 absolute text-black">
      <div className="flex flex-col text-center justify-start">
        <h1 className="text-white font-extrabold z-10  text-[2rem] font-fugaz_one text-shadow-md">
          AUTOMOTORES
        </h1>
        <h1 className="text-celeste font-extrabold z-10  text-[2rem] font-fugaz_one text-shadow-md">
          SEPTEMDEV
        </h1>
      </div>

      <div className="flex flex-row xl:gap-20 md:gap-20 gap-3  justify-center items-center">
          <h3 className="cursor-pointer">NOSOTROS</h3>
          <h3 className="cursor-pointer">USADOS</h3>
          <h3 className="cursor-pointer">NUEVOS</h3>
          <h3 className="cursor-pointer">CONSULTA</h3>
        </div>

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

      <div className="flex text-center">
        <p className="font-roboto">
          Copyright © SeptemDev Studio |{" "}
          <a target="e_blank" className="  cursor-pointer hover:underline hover:text-celeste">
            Políticas de Privacidad
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
