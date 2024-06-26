import { useEffect, useRef, useState } from 'react';
import imgNosotros from '../assets/img-nosotros.jpg';
import gsap from 'gsap';

const Nosotros = () => {
  const contentRef = useRef(null);
  const buttonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      gsap.to(contentRef.current, { height: 'auto', duration: 0.5, ease: 'power3.inOut' });
    } else {
      gsap.to(contentRef.current, { height: 0, duration: 0.5, ease: 'power3.inOut' });
    }
    gsap.to(buttonRef.current, { y: isOpen ? 'auto' : 0, duration: 0.5, ease: 'power3.inOut' });
  }, [isOpen]);

  return (
    <div className="min-h-screen flex flex-col text-center items-start justify-center pl-[5%] pb-[15%] z-10">
      <div className="flex flex-col items-center justify-between p-12 w-1/2 h-3/4 rounded-xl z-10">
        <div className="flex flex-col items-center bg-[rgba(37,57,92,0.37)] backdrop-blur-md w-3/4 z-10 p-12 rounded-t-xl">
          <h2 className="text-white font-extrabold z-10 text-3xl font-roboto text-shadow-md">
            NOSOTROS
          </h2>
        </div>
        <img src={imgNosotros} alt="nosotros" className="z-10 rounded-xl shadow-2xl" />
        <div
          className="relative flex flex-col items-center gap-7 bg-[rgba(37,57,92,0.37)] w-3/4 backdrop-blur-md z-10 p-6 rounded-b-xl"
          style={{ overflow: 'hidden' }}
        >
          <div ref={contentRef} style={{ height: 0, overflow: 'hidden' }}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, tempore. Dignissimos nam
              natus, atque ipsum ipsa porro cumque, nulla eius maxime sunt, nihil adipisci impedit
              eligendi iusto libero vero deserunt! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Eius quas at reiciendis consequuntur repellendus reprehenderit
              quibusdam quo explicabo aut, saepe eaque consectetur numquam possimus tempora rem
              voluptatem, omnis dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Vel, tempore. Dignissimos nam natus.
            </p>
          </div>
          <button
            ref={buttonRef}
            onClick={handleOpen}
            className="border py-[5px] flex items-center justify-center w-32 rounded-2xl backdrop-blur-lg shadow-lg font-semibold"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path fill="currentColor" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
