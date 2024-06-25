type ReseñaProps = {
  name: string;
  img: string;
  opinion: string;
  rating: number;
};

function Reseña({ name, img, opinion, rating }: ReseñaProps) {
  const renderStars = (rating: number): React.ReactNode[] => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={i <= rating ? "#ebca19" : "#D8DBE2"}
          className="w-6 h-6"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="flex justify-center h-full">
      <div className="rounded-xl m-auto md:w-[60%] h-full lg:w-full w-[90%] xl:w-full flex items-center flex-col justify-center bg-white p-5 gap-4 z-10 hover:scale-105 transform duration-300 shadow-xl">
        <img
          src={img}
          alt="cliente"
          className="relative z-20 rounded-full shadow-2xl w-[6rem] h-[6rem]"
        />
        <div className="flex flex-col items-center gap-4">
          <div className="flex">{renderStars(rating)}</div>
          <b className="text-xl font-bold font-roboto text-black">{name}</b>
          <p className="text-center text-black">{opinion}</p>
        </div>
      </div>
    </div>
  );
}

export default Reseña;
