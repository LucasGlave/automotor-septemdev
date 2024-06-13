import logo2 from "../assets/logo-2.jpg";
import { IoIosMenu } from "react-icons/io";
import { Link, animateScroll as scroll } from "react-scroll";
import AOS from "aos";
import gsap from "gsap";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1600 });
  }, []);
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
    <div
      className="w-screen h-auto xl:fixed absolute flex items-start text-white justify-center z-50"
      data-aos="fade-down"
    >
      <div
        className={`flex relative xl:w-[60%] md:[60%] w-[80%] h-[3.5rem] ${
          !isBorder && isOpen && "overflow-hidden"
        } rounded-full bg-black dark:bg-footer-dark z-10 mt-3 m-auto items-center justify-between shadow-xl xl:pr-24 pr-6`}
      >
        <div>
          <Link to="INICIO" smooth={true} duration={500} onClick={() => {navigate("/")}}>
            <img
              src={logo2}
              className="w-[100px] h-[3.5rem] rounded-full ml-0 z-20 cursor-pointer"
            />
          </Link>
        </div>
        <div className="xl:flex md:flex hidden gap-10">
          <Link
            to="INICIO"
            smooth={true}
            duration={500}
            className="font-roboto hover:text-logoTypographyHover cursor-pointer"
            onClick={() => {navigate("/")}}
          >
            Inicio
          </Link>
          <Link
            to=""
            smooth={true}
            duration={500}
            className="font-roboto hover:text-logoTypographyHover cursor-pointer"
          >
            Autos
          </Link>
          <Link
            to=""
            smooth={true}
            duration={500}
            className="font-roboto hover:text-logoTypographyHover cursor-pointer"
          >
            Camionetas
          </Link>
          <Link
            to="NOSOTROS"
            smooth={true}
            duration={500}
            className="font-roboto hover:text-logoTypographyHover cursor-pointer"
          >
            Nosotros
          </Link>
          <Link
            to="CONSULTAS"
            smooth={true}
            duration={500}
            className="font-roboto hover:text-logoTypographyHover cursor-pointer"
          >
            Consulta
          </Link>
        </div>

        <div
          className="absolute top-0 flex overflow-hidden transition-all duration-75 ease-out flex-col items-center gap-7 dark:bg-footer-dark bg-gray-image shadow-2xl z-[-10] w-full rounded-[2rem]"
          style={
            isOpen && !isBorder
              ? { borderRadius: "80px" }
              : !isOpen && !isBorder
              ? { borderRadius: "9999px" }
              : { borderRadius: "30px" }
          }
        >
          <div
            ref={contentRef}
            className=" h-0 text-center mt-[3.5rem] flex flex-col gap-2 w-full overflow-hidden"
          >
            <Link
              to="SERVICES"
              className="font-roboto hover:text-logoTypographyHover cursor-pointer"
            >
              Inicio
            </Link>
            <Link
              to="ABOUT"
              className="font-roboto hover:text-logoTypographyHover cursor-pointer"
            >
              Autos
            </Link>
            <Link
              to="CLIENTS"
              className="font-roboto hover:text-logoTypographyHover cursor-pointer"
            >
              Camionetas
            </Link>
            <Link
              to="CONSULT"
              className="font-roboto hover:text-logoTypographyHover cursor-pointer"
            >
              Nosotros
            </Link>
            <Link
              to="TEAM"
              className="font-roboto hover:text-logoTypographyHover cursor-pointer"
            >
              Consulta
            </Link>
          </div>
        </div>
        <button
          ref={buttonRef}
          onClick={handleOpen}
          className="xl:hidden md:hidden flex items-center text-3xl"
        >
          <IoIosMenu />
        </button>
      </div>
    </div>
  );
};

export default Header;
