import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

type TitleProps = {
  title: string;
  comment: string;
  className?: string;
};

function Title({ title, comment, className }: TitleProps) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className={`relative flex justify-center xl:pb-0 ${className}`}
      data-aos="fade"
      data-aos-duration="1600"
    >
      <h3 className="font-fugaz_one font-extrabold xl:text-[7rem] text-[3rem] opacity-40 tracking-widest drop-shadow-3xl">
        {title}
      </h3>
      <p className="absolute text-azulado dark:text-white xl:top-[48%] top-[42%] xl:text-4xl text-lg font-semibold font-fugaz_one z-10 italic">
        {comment}
      </p>
    </div>
  );
}

export default Title;