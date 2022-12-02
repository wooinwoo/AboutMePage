import { useEffect, useState } from "react";
import Layout from "../components/layout";

const projectValue = [
  {
    front: {
      title: "ZeroGificon",
      imgSrc: "./images/zerogifticon.png",
      explanation: "zero-gifticon은 사용자간 기프티콘을 거래하는 서비스입니다.",
    },
    back: {
      developPeriod: "22.09 ~ 22.10 (6인개발)",
      explanation: "카카오로그인, 일반로그인, 상품등록, 상품삭제, 상품정렬",
      myContribution: ["게시판"],
      skills: [""],
    },
    icons: ["./images/home.svg", "./images/github.svg"],
  },
  {
    front: {
      title: "Laws Cloud",
      imgSrc: "./images/lawsCloud.png",
      explanation:
        "2000년대 이후 법률 발의안들의 키워드들을 워드 클라우드로 보여주는 웹 어플리케이션입니다.",
    },
    back: {
      developPeriod: "22.10 ~ 22.11 (4인개발)",
      explanation: "",
      myContribution: ["게시판"],
      skills: [""],
    },
    icons: ["./images/home.svg"],
  },
  {
    front: {
      title: "ReactShop",
      imgSrc: "./images/reactShop.gif",
      explanation: "react를 이용한 쇼핑몰 입니다.",
    },
    back: {
      developPeriod: "22.09 ~ 22.10 (1인개발)",
      explanation: "",
      myContribution: ["게시판"],
      skills: [""],
    },
    icons: ["./images/home.svg", "./images/github.svg"],
  },
  {
    front: {
      title: "자기소개~",
      imgSrc: "./images/lawsCloud.png",
      explanation: "NextJs를 사용한 자기소개 웹페이지 입니다.",
    },
    back: {
      developPeriod: "22.09 ~ 22.10 (1인개발)",
      explanation: "",
      myContribution: ["게시판"],
      skills: [""],
    },
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
    <Layout page={"project"}>
      <section className="flex flex-col lg:flex-row text-gray-600 body-font container justify-center px-5  md:px-28 mx-auto">
        <div className=" w-[320px] md:w-[500px] relative mx-auto ">
          <div className=" overflow-hidden">
            <div
              className="flex transition-all duration-700 ease-in-out"
              style={style}>
              {projectValue.map((e, idx) => (
                <div key={idx}>
                  <div className="relative card_container ">
                    <div
                      className="bg-gray-300 dark:bg-gray-700 p-2 rounded-lg w-[320px] md:w-[500px] h-[400px] transition-transform duration-1000 card_front"
                      key={idx}>
                      <img
                        className="block rounded w-full  h-[250px] object-center mb-6"
                        src={e.front.imgSrc}
                        alt="content"
                      />
                      <h2 className="text-lg text-gray-900 font-medium title-font mb-4 dark:text-white">
                        {e.front.title}
                      </h2>
                      <p className="leading-relaxed text-base text-slate-500 dark:text-slate-400">
                        {e.front.explanation}
                      </p>
                    </div>
                    <div className="flex flex-col justify-between text-black z-10 p-4 md:px-10 absolute top-0 left-0 w-full h-full bg-gray-300 dark:bg-gray-700 rounded-lg duration-1000 card_back">
                      <div>
                        <h2 className="flex justify-center text-xl text-gray-900 font-medium title-font mx-auto dark:text-white">
                          {e.front.title}
                        </h2>
                        <p className="flex justify-center text-sm dark:text-gray-300 mb-3">
                          {e.back.developPeriod}
                        </p>
                        <p className="font-bold dark:text-gray-300">
                          # 주요 기능 설명
                        </p>
                        <p className="text-sm dark:text-gray-300 mb-3">
                          {e.back.explanation}
                        </p>
                        <p className="font-bold dark:text-gray-300">
                          # 나의 기여도
                        </p>
                        <nav class="flex flex-col sm:items-start sm:text-left text-center items-start -mb-1 space-y-2">
                          {e.back.myContribution.map((e) => (
                            <div className="text-sm dark:text-gray-300">
                              <span className="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                <svg
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="3"
                                  className="w-3 h-3"
                                  viewBox="0 0 24 24">
                                  <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                              </span>
                              {e}
                            </div>
                          ))}
                        </nav>
                      </div>
                      <div>skills</div>
                    </div>
                  </div>
                  <div className="flex justify-around py-10 px-20 bg-gray-300 dark:bg-gray-700 rounded-lg mt-2 w-full h-[100px]">
                    {e.icons.map((icon, idx) => (
                      <img className="blocks" src={icon} key={idx} />
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

        <div className="container flex items-center justify-center mx-auto mt-24 lg:ml-24 lg:mt-10 ">
          <div className="group text-center relative rounded-tl-lg w-[150px]">
            <h2 className="absolute -top-20 -left-0 text-4xl text-slate-800 dark:text-slate-200">
              Project
            </h2>
            <nav className="list-none bg-white dark:bg-slate-800 p-5 pr-0">
              {projectValue.map((e, idx) => (
                <li className="flex text-start flex-col py-2 cursor-pointer">
                  <a
                    className="duration-500 text-slate-500 dark:text-slate-400 hover:tracking-widest dark:hover:tracking-widest hover:text-gray-900 dark:hover:text-gray-50"
                    onClick={() => setCurrentImgIndex(idx)}>
                    <span className="inline-block relative">
                      {e.front.title}
                      <span
                        className="inline-block absolute bottom-0 left-0 w-full h-[1px] duration-700 z-0 group-hover:z-10"
                        style={{
                          background:
                            "linear-gradient(135deg,#FFF548 0%,#3C1A5B 50%,#FFF548 100%)",
                          opacity: currentImgIndex === idx ? "1" : "0",
                        }}
                      />
                      <span
                        className="inline-block absolute bottom-0 left-0 w-full h-[1px] duration-700 z-10 group-hover:z-0"
                        style={{
                          background:
                            "linear-gradient(135deg,#3C1A5B 0%,#FFF548 50%,#3C1A5B 100%)",
                          opacity: currentImgIndex === idx ? "1" : "0",
                        }}
                      />
                    </span>
                  </a>
                </li>
              ))}
            </nav>

            <div
              className="absolute w-[90px] h-[90px] -z-10 -top-1 -left-1 rounded-tl-lg duration-700 opacity-100 group-hover:opacity-0"
              style={{
                background:
                  "linear-gradient(135deg,#FFF548 0%,#3C1A5B 50%,#FFF548 100%)",
              }}></div>
            <div
              className="absolute w-[90px] h-[90px] -z-10 -top-1 -left-1 rounded-tl-lg duration-700 opacity-0 group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(135deg,#3C1A5B 0%,#FFF548 50%,#3C1A5B 100%)",
              }}></div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
