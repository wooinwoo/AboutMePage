import Layout from "../components/layout";
import { useState } from "react";

const careerValue = [
  {
    title: "씨엔로봇",
    period: "2021.04.19 ~ 2022.05.31",

    contents: [
      {
        subTitle: "협동로봇 엔지니어",
        list: [
          "파이썬 기반 로봇 프로그램 제어",
          "c++, 두산로보틱스 api를 활용한 로봇 제어",
          "주변 장비와 socket, rs232, modbus, tcp/ip 통신환경 구축 및 제어",
        ],
      },
      {
        subTitle: "로봇, 파이썬 강의",
        list: [
          "서울로봇고, 경남로봇고, 세경고 등 다양한 고등학교에 로봇, 파이썬 강의",
        ],
      },
    ],
  },
  {
    title: "제로베이스 프론트엔드 스쿨 4기",
    period: "2022.05.20 ~ 2022.11.20",
    contents: [
      {
        subTitle: "백엔드 수강생들과의 협업경험",
        list: ["REST API 연동", "Notion, Slack, Git 등 다양한 협업 툴 사용"],
      },
    ],
  },
  {
    title: "옥소폴리틱스 인턴쉽",
    period: "2022.09.20 ~ 2022.10.20",
    contents: [
      {
        subTitle: "회사 프로젝트 진행",
        list: [
          "회사 컨셉에 맞는 프로젝트 주제 회의",
          "Figma로 디자인 시안 제작",
          "Firebase 세팅과 연동 경험",
        ],
      },
    ],
  },
];

const awardsMoreValue = [
  {
    title: "배재대학교 머신러닝 교육",
    period: "2021. 09",

    contents: [
      {
        subTitle: "파이썬 머신러닝 교육",
        list: ["재직자 대상 직무능력 교육프로그램 수료"],
      },
    ],
  },
  {
    title: "전국마이스터대전",
    period: "2019. 11",
    contents: [
      {
        subTitle: "산업용로봇 금상",
        list: ["협동로봇제어", "파이썬 알고리즘 문제 풀이"],
      },
    ],
  },
  {
    title: "전국마이스터대전",
    period: "2018. 11",
    contents: [
      {
        subTitle: "산업용로봇 동상",
        list: ["협동로봇제어", "파이썬 알고리즘 문제 풀이"],
      },
    ],
  },
];

export default function TimeLine() {
  const [toggle, setToggle] = useState("career");
  return (
    <Layout page={"timeline"}>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container overflow-hidden px-5 pb-10 mx-auto w-full">
          <div className="flex justify-center mb-4 pb-2 bottomBorder">
            <div
              className="flex duration-700"
              style={
                toggle == "career"
                  ? { transform: `translateX(30%)` }
                  : { transform: `translateX(-20%)` }
              }>
              <h1
                className="text-4xl font-bold dark:text-gray-300 pr-2 cursor-pointer duration-700"
                onClick={() => setToggle("career")}
                style={toggle == "awards&more" ? { opacity: "0.2" } : {}}>
                CAREER
              </h1>
              <h1
                className="text-4xl font-bold dark:text-gray-300 cursor-pointer duration-700"
                onClick={() => setToggle("awards&more")}
                style={toggle == "career" ? { opacity: "0.2" } : {}}>
                Awards & More
              </h1>
            </div>
          </div>
          <div
            className="flex w-full duration-700"
            style={
              toggle == "career"
                ? { transform: `translateX(0%)` }
                : { transform: `translateX(-100%)` }
            }>
            <div
              className="shrink-0 w-full -my-8 divide-y-2 divide-gray-100 duration-700"
              style={
                toggle == "career" ? { opacity: "1.0" } : { opacity: "0" }
              }>
              {careerValue.map((e) => (
                <div className="py-8 flex flex-wrap md:flex-nowrap">
                  <div className="pr-2 md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span className="font-semibold title-font text-gray-700 dark:text-gray-300">
                      {e.title}
                    </span>
                    <span className="mt-1 text-gray-500 text-sm">
                      {e.period}
                    </span>
                  </div>
                  <div className="md:flex-grow">
                    {e.contents.map((e) => (
                      <div className="mb-4">
                        <h2 className="text-xl font-medium text-gray-900 dark:text-gray-400 title-font mb-2">
                          {e.subTitle}
                        </h2>
                        <nav class="flex flex-col sm:items-start sm:text-left text-center items-start -mb-1 space-y-2">
                          {e.list.map((e) => (
                            <div className="flex justify-center items-center">
                              <span className=" bg-gray-800 dark:bg-gray-50 w-2 h-2 mr-3 rounded-full inline-flex items-center justify-center" />
                              <span className="text-sm text-start text-slate-600 dark:text-slate-400">
                                {e}
                              </span>
                            </div>
                          ))}
                        </nav>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div
              className="shrink-0 w-full -my-8 divide-y-2 divide-gray-100 duration-700"
              style={
                toggle == "awards&more" ? { opacity: "1.0" } : { opacity: "0" }
              }>
              {awardsMoreValue.map((e) => (
                <div className="py-8 flex flex-wrap md:flex-nowrap">
                  <div className="pr-3 md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span className="font-semibold title-font text-gray-700 dark:text-gray-300">
                      {e.title}
                    </span>
                    <span className="mt-1 text-gray-500 text-sm">
                      {e.period}
                    </span>
                  </div>
                  <div className="md:flex-grow">
                    {e.contents.map((e) => (
                      <div className="mb-4">
                        <h2 className="text-xl font-medium text-gray-900 dark:text-gray-400 title-font mb-2">
                          {e.subTitle}
                        </h2>
                        <nav class="flex flex-col sm:items-start sm:text-left text-center items-start -mb-1 space-y-2">
                          {e.list.map((e) => (
                            <div className="flex justify-center items-center">
                              <span className=" bg-gray-800 dark:bg-gray-50 w-2 h-2 mr-3 rounded-full inline-flex items-center justify-center" />
                              <span className="text-sm text-start text-slate-600 dark:text-slate-400">
                                {e}
                              </span>
                            </div>
                          ))}
                        </nav>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
