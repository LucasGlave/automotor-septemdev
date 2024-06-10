import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-around xl:justify-evenly w-screen xl:h-[15rem] h-[15rem] bg-gradient-to-b from-transparent to-white z-20 absolute text-black">
      {/* MOBILE */}
      <div className="flex xl:hidden gap-8">
        {/* LOGO */}
        <div className="xl:ml-0 w-[50%] flex items-center justify-center">
          {/* <img
            src={logoFooter}
            className="w-[70%] xl:w-[10rem] xl:h-[10rem] dark:invert"
          /> */}
          <div className="w-full flex flex-col text-center justify-center items-center z-10">
            <h1 className="text-white font-extrabold z-10 text-[1.5rem] font-fugaz-one text-shadow-md">
              AUTOMOTORES
            </h1>
            <h1 className="text-celeste font-extrabold z-10 text-[1.5rem] font-fugaz-one text-shadow-md">
              SEPTEMDEV
            </h1>
          </div>
        </div>
        <div className="border border-black flex h-[6.5rem]" />
        <div className="flex justify-center items-center xl:order-last text-black w-[50%] gap-3">
          <a href="https://www.instagram.com/septemdevstudio/" target="_blank">
            <FaInstagramSquare style={{ fontSize: "200%" }} />
          </a>
          <a
            href="https://www.linkedin.com/company/septemdev-studio/"
            target="_blank"
          >
            <FaLinkedin style={{ fontSize: "200%" }} />
          </a>
        </div>
      </div>

      {/* ICONOS */}
      {/* DESKTOP */}
      <div className="hidden xl:flex justify-center items-center xl:order-last text-black">
        <a href="https://www.instagram.com/septemdevstudio/" target="_blank">
          <FaInstagramSquare style={{ fontSize: "270%" }} />
        </a>
        <a
          href="https://www.linkedin.com/company/septemdev-studio/"
          target="_blank"
        >
          <FaLinkedin style={{ fontSize: "270%" }} />
        </a>
      </div>

      {/* LOGO */}
      <div className="hidden xl:flex ">
        {/* <img
          src={logoFooter}
          className="w-[8rem] h-[8rem] xl:w-[10rem] xl:h-[10rem] dark:invert"
        /> */}
        <div className="w-full min-h-screen flex flex-col text-center justify-center items-center z-10">
          <h1 className="text-white font-extrabold z-10 text-[2rem] font-fugaz-one text-shadow-md">
            AUTOMOTORES
          </h1>
          <h1 className="text-celeste font-extrabold z-10 text-[2rem] font-fugaz-one text-shadow-md">
            SEPTEMDEV
          </h1>
        </div>
      </div>
      <div className="hidden border border-black xl:flex justify-center items-center h-[8rem] my-auto" />

      {/* Div para el copyright */}
      <div className="text-center mt-4 xl:mt-0 text-sm xl:text-base pb-3">
        <p className="font-roboto">
          Copyright © SeptemDev Studio |{" "}
          <a target="e_blank" className="  cursor-pointer hover:underline hover:text-celeste">
            Políticas de Privacidad
          </a>
        </p>
      </div>
      <div className="hidden border border-black xl:flex justify-center items-center h-[8rem] my-auto" />
    </div>
  );
}

export default Footer;
