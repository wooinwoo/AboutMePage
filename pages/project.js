import { useState } from "react";
import Layout from "../components/layout";

const projectValue = [
  {
    imgSrc: "./images/zerogifticon.png",
    title: "ZeroGificon",
    explanation: "zero-gifticon은 사용자간 기프티콘을 거래하는 서비스입니다.",
    icons: ["./images/home.svg", "./images/github.svg"],
  },
  {
    title: "Laws Cloud",
    imgSrc: "./images/lawsCloud.png",
    explanation:
      "2000년대 이후 법률 발의안들의 키워드들을 워드 클라우드로 보여주는 웹 어플리케이션입니다.",
    icons: ["./images/home.svg"],
  },
  {
    title: "ReactShop",
    imgSrc: "./images/reactShop.gif",
    explanation: "react를 이용한 쇼핑몰 입니다.",
    icons: ["./images/home.svg", "./images/github.svg"],
  },
  {
    title: "자기소개 페이지",
    imgSrc: "./images/lawsCloud.png",
    explanation: "NextJs를 사용한 자기소개 웹페이지 입니다.",
    icons: ["./images/home.svg", "./images/github.svg"],
  },
];

export default function Project() {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [style, setStyle] = useState({
    transform: `translateX(-${currentImgIndex}00%)`,
  });

  const prevSlide = () => {
    if (currentImgIndex !== 0) {
      setCurrentImgIndex(currentImgIndex - 1);
      setStyle({
        transform: `translateX(-${currentImgIndex - 1}00%)`,
      });
    }
  };
  const nextSlide = () => {
    if (currentImgIndex + 1 !== projectValue.length) {
      setCurrentImgIndex(currentImgIndex + 1);
      setStyle({
        transform: `translateX(-${currentImgIndex + 1}00%)`,
      });
    }
  };
  return (
    <Layout page={"project"}>
      <section className="flex text-gray-600 body-font container px-20 mx-auto">
        <div className="w-[500px] relative flex">
          <div className="w-[500px] overflow-hidden">
            <div
              className="flex w-[500px] transition-all duration-700 ease-in-out"
              style={style}>
              {projectValue.map((e, idx) => (
                <div>
                  <div
                    className="bg-gray-300 p-6 rounded-lg w-[500px] h-[400px]"
                    key={idx}>
                    <img
                      className="block rounded w-[500px] h-[250px] object-center mb-6"
                      src={e.imgSrc}
                      alt="content"
                    />
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                      {e.title}
                    </h2>
                    <p className="leading-relaxed text-base">{e.explanation}</p>
                  </div>
                  <div className="flex justify-around py-10 px-20 bg-gray-300 rounded-lg mt-2 w-[500px] h-[100px]">
                    {e.icons.map((icon) => (
                      <img className="block" src={icon} />
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
        <div class="container p-48  mx-auto">
          <div class="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
            <div class="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-400 hover:text-white">ZeroGificon</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">LawsCloud</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">ReactShop</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">FourthLink</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
