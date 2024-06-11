// import logo1 from '../assets/logo-1.jpg'

import logo2 from "../assets/logo-2.jpg";
import { useEffect, useRef, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import gsap from "gsap";

const Header = () => {
  const contentRef = useRef(null);
  const buttonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isBorder, setIsBorder] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    setTimeout(() => {
      setIsBorder(!isBorder);
    }, 100);
  };

  useEffect(() => {
    if (isOpen) {
      gsap.to(contentRef.current, {
        height: "10rem",
        duration: 0.4,
        ease: "power3.inOut",
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        duration: 0.2,
        ease: "power3.inOut",
      });
    }
    gsap.to(buttonRef.current, {
      y: isOpen ? "auto" : 0,
      duration: 0.2,
      ease: "power3.inOut",
    });
  }, [isOpen]);
  return (
    <div className="w-full h-full absolute flex items-start justify-center z-10">
      <div className="xl:flex hidden md:flex justify-between items-center mt-3 px-2 border rounded-full z-10 w-[60%] h-20 backdrop-blur-md bg-[#00000023]">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <img
            src={logo2}
            alt="logo-2"
            className="w-full h-full object-cover cursor-pointer"
          />
        </div>
        <div className="flex flex-row gap-8 xl:mr-20 font-semibold justify-center xl:text-[1rem] md:text-sm md:mr-2">
          <h3 className="cursor-pointer hover:scale-105 transform duration-300">NOSOTROS</h3>
          <h3 className="cursor-pointer hover:scale-105 transform duration-300">USADOS</h3>
          <h3 className="cursor-pointer hover:scale-105 transform duration-300">NUEVOS</h3>
          <h3 className="cursor-pointer hover:scale-105 transform duration-300">CONSULTA</h3>
        </div>
      </div>

      <div
        className="absolute xl:hidden md:hidden top-0 p-2 flex overflow-hidden transition-all duration-75 ease-out items-start justify-between gap-7 bg-[#00000023]  backdrop-blur-md shadow-2xl z-[-10] w-[90%] mt-4 rounded-[2rem]"
        style={
          isOpen && !isBorder
            ? { borderRadius: "80px" }
            : !isOpen && !isBorder
            ? { borderRadius: "9999px" }
            : { borderRadius: "30px" }
        }
      >
        <div>
          <p>
            <img
              src={logo2}
              className="w-[140px] h-[3.5rem] rounded-full ml-0 z-20 cursor-pointer"
            />
          </p>
        </div>
        <div
          ref={contentRef}
          className=" h-0 text-center mt-[3.5rem] flex flex-col gap-2 w-full overflow-hidden"
        >
          <p
            // spy={true}
            // smooth={true}
            // duration={700}
            className="font-roboto hover:text-logoTypographyHover"
          >
            NOSOTROS
          </p>
          <p
            // spy={true}
            // smooth={true}
            // duration={700}
            className="font-roboto hover:text-logoTypographyHover"
          >
            USADOS
          </p>
          <p
            // spy={true}
            // smooth={true}
            // duration={700}
            className="font-roboto hover:text-logoTypographyHover"
          >
            NUEVOS
          </p>
          <p
            // spy={true}
            // smooth={true}
            // duration={700}
            className="font-roboto hover:text-logoTypographyHover"
          >
            CONSULTA
          </p>
        </div>
        <button
          ref={buttonRef}
          onClick={handleOpen}
          className="xl:hidden flex items-center text-3xl"
        >
          <IoIosMenu />
        </button>
      </div>
    </div>
  );
};

export default Header;
