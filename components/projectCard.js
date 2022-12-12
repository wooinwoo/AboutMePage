import { useState, useEffect } from "react";
import CardFront from "./cardFront";
import CardBack from "./cardBack";
export default function ProjectCard({
  projectValue,
  currentImgIndex,
  setCurrentImgIndex,
}) {
  const [style, setStyle] = useState({
    transform: `translateX(-${currentImgIndex}00%)`,
  });

  const prevSlide = () => {
    if (currentImgIndex !== 0) {
      setCurrentImgIndex(currentImgIndex - 1);
    }
  };
  const nextSlide = () => {
    if (currentImgIndex + 1 !== projectValue.length) {
      setCurrentImgIndex(currentImgIndex + 1);
    }
  };

  useEffect(() => {
    setStyle({
      transform: `translateX(-${currentImgIndex}00%)`,
    });
  }, [currentImgIndex]);

  return (
    <div className=" w-[320px] md:w-[500px] relative mx-auto ">
      <div className="overflow-hidden">
        <div
          className="flex transition-all duration-700 ease-in-out"
          style={style}>
          {projectValue.map((e, idx) => (
            <div key={idx}>
              <div className="relative card_container ">
                <CardFront e={e} />
                <CardBack e={e} />
              </div>
              <div className="flex justify-around py-10 px-20 bg-gray-300 dark:bg-gray-700 rounded-lg mt-2 w-full h-[100px]">
                {e.icons.map((e, idx) => (
                  <a href={e.href} target="_blank" key={idx}>
                    <img className="w-[20px]" src={e.imgSrc} key={idx} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-[45%] left-[-3rem] rounded-full text-white bg-slate-500 w-8 h-8"
        onClick={() => prevSlide()}>
        {"<"}
      </button>
      <button
        className="absolute top-[45%] right-[-3rem] rounded-full text-white bg-slate-500 w-8 h-8"
        onClick={() => nextSlide()}>
        {">"}
      </button>
    </div>
  );
}
