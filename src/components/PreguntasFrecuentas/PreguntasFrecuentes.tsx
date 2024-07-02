import { useEffect, useRef, useState } from "react";
import Title from "../Title";
import gsap from "gsap";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

function PreguntasFrecuentes() {
  const contentRef = useRef(null);
  const buttonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (isOpen) {
      gsap.to(contentRef.current, {
        height: "auto",
        duration: 0.5,
        ease: "power3.inOut",
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        duration: 0.5,
        ease: "power3.inOut",
      });
    }
    gsap.to(buttonRef.current, {
      y: isOpen ? "auto" : 0,
      duration: 0.5,
      ease: "power3.inOut",
    });
  }, [isOpen]);

  const contentRef2 = useRef(null);
  const buttonRef2 = useRef(null);
  const [isOpen2, setIsOpen2] = useState(false);

  const handleOpen2 = () => {
    setIsOpen2(!isOpen2);
  };

  useEffect(() => {
    if (isOpen2) {
      gsap.to(contentRef2.current, {
        height: "auto",
        duration: 0.5,
        ease: "power3.inOut",
      });
    } else {
      gsap.to(contentRef2.current, {
        height: 0,
        duration: 0.5,
        ease: "power3.inOut",
      });
    }
    gsap.to(buttonRef2.current, {
      y: isOpen2 ? "auto" : 0,
      duration: 0.5,
      ease: "power3.inOut",
    });
  }, [isOpen2]);

  const contentRef3 = useRef(null);
  const buttonRef3 = useRef(null);
  const [isOpen3, setIsOpen3] = useState(false);

  const handleOpen3 = () => {
    setIsOpen3(!isOpen3);
  };

  useEffect(() => {
    if (isOpen3) {
      gsap.to(contentRef3.current, {
        height: "auto",
        duration: 0.5,
        ease: "power3.inOut",
      });
    } else {
      gsap.to(contentRef3.current, {
        height: 0,
        duration: 0.5,
        ease: "power3.inOut",
      });
    }
    gsap.to(buttonRef3.current, {
      y: isOpen3 ? "auto" : 0,
      duration: 0.5,
      ease: "power3.inOut",
    });
  }, [isOpen3]);

  const contentRef4 = useRef(null);
  const buttonRef4 = useRef(null);
  const [isOpen4, setIsOpen4] = useState(false);

  const handleOpen4 = () => {
    setIsOpen4(!isOpen4);
  };

  useEffect(() => {
    if (isOpen4) {
      gsap.to(contentRef4.current, {
        height: "auto",
        duration: 0.5,
        ease: "power3.inOut",
      });
    } else {
      gsap.to(contentRef4.current, {
        height: 0,
        duration: 0.5,
        ease: "power3.inOut",
      });
    }
    gsap.to(buttonRef4.current, {
      y: isOpen4 ? "auto" : 0,
      duration: 0.5,
      ease: "power3.inOut",
    });
  }, [isOpen4]);
  return (
    <div className="w-full min-h-40 flex flex-col xl:text-start xl:items-start text-center justify-center items-center pb-[15%] z-10 gap-5">
      <div className="w-full py-5 flex flex-col items-center gap-8 z-20">
      <div className="flex flex-col justify-center items-center z-10 relative m-auto mt-16 xl:mt-0 md:mt-12">
        <Title title="PREGUNTAS FRECUENTES" comment="" />
      </div>
      <div className="flex xl:flex-row lg:flex-row flex-col gap-5 xl:gap-0 lg:gap-0 xl:w-[70%] lg:w-[70%] justify-center z-10 font-serif">
        <div className="flex flex-col gap-5 items-center">
          <div
            ref={contentRef}
            onClick={handleOpen}
            style={{ minHeight: "60px", overflow: "hidden" }}
            className="xl:w-[80%] lg:w-[80%] w-[90%] rounded-2xl border border-black bg-white flex flex-col items-start px-5 py-4 gap-3 text-black text-start cursor-pointer"
          >
            <div className="flex items-center justify-between w-full xl:pr-5 lg:pr-5 pr-2">
              <h3 className="xl:text-lg lg:text-lg xl:mb-0 lg:mb-0 mb-3">¿Qué tipos de financiamiento ofrecen?</h3>
              <button ref={buttonRef} onClick={handleOpen} className="ml-auto xl:mb-0 lg:mb-0 mb-3">
                {isOpen ? <MdOutlineArrowDropUp /> : <MdOutlineArrowDropDown />}
              </button>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
              ratione autem cum fuga in voluptatibus blanditiis pariatur
              exercitationem modi molestias libero, vel, nulla cupiditate
              similique non ab natus vitae accusantium.
            </p>
          </div>

          <div
            ref={contentRef2}
            onClick={handleOpen2}
            style={{ minHeight: "60px", overflow: "hidden" }}
            className="xl:w-[80%] lg:w-[80%] w-[90%] rounded-2xl border border-black bg-white flex flex-col items-start px-5 py-4 gap-3 text-black text-start cursor-pointer"
          >
            <div className="flex items-center justify-between w-full xl:pr-5 lg:pr-5 pr-2">
              <h3 className="xl:text-lg lg:text-lg xl:mb-0 lg:mb-0 mb-3">¿Puedo hacer una prueba de manejo?</h3>
              <button
                ref={buttonRef2}
                onClick={handleOpen2}
                className="ml-auto xl:mb-0 lg:mb-0 mb-3"
              >
                {isOpen2 ? (
                  <MdOutlineArrowDropUp />
                ) : (
                  <MdOutlineArrowDropDown />
                )}
              </button>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
              ratione autem cum fuga in voluptatibus blanditiis pariatur
              exercitationem modi molestias libero, vel, nulla cupiditate
              similique non ab natus vitae accusantium.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 gap-x-5 items-center">
          <div
            ref={contentRef3}
            onClick={handleOpen3}
            style={{ minHeight: "60px", overflow: "hidden" }}
            className="xl:w-[80%] lg:w-[80%] w-[90%] rounded-2xl border border-black bg-white flex flex-col items-start px-5 py-4 gap-3 text-black text-start cursor-pointer"
          >
            <div className="flex items-center justify-between w-full xl:h-full lg:h-full h-10 xl:pr-5 lg:pr-5 pr-2">
              <h3 className="xl:text-lg lg:text-lg xl:mb-0 lg:mb-0 mb-3">
                ¿Cuál es la cobertura de la garantía del vehículo?
              </h3>
              <button
                ref={buttonRef3}
                onClick={handleOpen3}
                className="ml-auto xl:mb-0 lg:mb-0 mb-3"
              >
                {isOpen3 ? (
                  <MdOutlineArrowDropUp />
                ) : (
                  <MdOutlineArrowDropDown />
                )}
              </button>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
              ratione autem cum fuga in voluptatibus blanditiis pariatur
              exercitationem modi molestias libero, vel, nulla cupiditate
              similique non ab natus vitae accusantium.
            </p>
          </div>
          <div
            ref={contentRef4}
            onClick={handleOpen4}
            style={{ minHeight: "60px", overflow: "hidden" }}
            className="xl:w-[80%] lg:w-[80%] w-[90%] rounded-2xl border border-black bg-white flex flex-col items-start px-5 py-4 gap-3 text-black text-start cursor-pointer"
          >
            <div className="flex items-center justify-between w-full xl:h-full lg:h-full h-10 xl:pr-5 lg:pr-5 pr-2">
              <h3 className="xl:text-lg lg:text-lg xl:mb-0 lg:mb-0 mb-3">
                ¿Aceptan vehículos usados como parte de pago?
              </h3>
              <button
                ref={buttonRef4}
                onClick={handleOpen4}
                className="ml-auto xl:mb-0 lg:mb-0 mb-3"
              >
                {isOpen4 ? (
                  <MdOutlineArrowDropUp />
                ) : (
                  <MdOutlineArrowDropDown />
                )}
              </button>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
              ratione autem cum fuga in voluptatibus blanditiis pariatur
              exercitationem modi molestias libero, vel, nulla cupiditate
              similique non ab natus vitae accusantium.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default PreguntasFrecuentes;
