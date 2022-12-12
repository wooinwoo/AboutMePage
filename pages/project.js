import { useState } from "react";
import Layout from "../components/layout";
import ProjectCard from "../components/projectCard";
import ProjectList from "../components/projectList";

const projectValue = [
  {
    front: {
      title: "ZeroGificon",
      imgSrc: "./images/zerogifticon.png",
      explanation: "zero-gifticon은 사용자간 기프티콘을 거래하는 서비스입니다.",
    },
    back: {
      developPeriod: "22.09 ~ 22.10 (6인개발)",
      explanation:
        "카카오로그인, 일반로그인, 상품등록, 상품삭제, 상품검색, 상품정렬, 상품좋아요, 상품뷰, 리뷰등록, 감사메시지, 결제",
      myContribution: [
        "관리자용[상품등록,삭제] 페이지 작업",
        "손님용[상품,상품상세,선물하기,결제] 페이지 작업",
        "아임포트를 활용한 가상결제",
        "REST API 연동 경험",
      ],
      skills: { front: "React, CSS Module", deploy: "AWS(S3,CloudFront)" },
    },
    icons: [
      {
        imgSrc: "./images/github.svg",
        href: "https://github.com/wooinwoo/zeroGifticon",
      },
      { imgSrc: "./images/notion.svg", href: "" },
    ],
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
      explanation:
        "발의안워드클라우드, 발의안비교페이지, 발의안게시판, 발의안상세설명모달창, 발의안좋아요, 발의안뷰, 발의안댓글",
      myContribution: ["Figma를 이용한 프로젝트 디자인", "발의안 게시판 작업"],
      skills: {
        front: "React, Styled Components",
        deploy: "AWS(S3,CloudFront)",
      },
    },
    icons: [
      { imgSrc: "./images/home.svg", href: "" },
      {
        imgSrc: "./images/github.svg",
        href: "https://github.com/wooinwoo/LawsCloud",
      },
      { imgSrc: "./images/notion.svg", href: "" },
    ],
  },
  {
    front: {
      title: "ReactShop",
      imgSrc: "./images/reactShop.gif",
      explanation: "react를 이용한 쇼핑몰 입니다.",
    },
    back: {
      developPeriod: "22.09 ~ 22.10 (1인개발)",
      explanation:
        "캐러셀이미지슬라이드, 상품, 상품상세, 상품검색, 다크모드, 장바구니",
      myContribution: [
        "사용자를 위한 다크모드 적용",
        "반응형 웹 적용",
        "localstorage를 이용한 장바구니 기능",
      ],
      skills: { front: "React, Tailwind CSS", deploy: "Vercel" },
    },
    icons: [
      { imgSrc: "./images/home.svg", href: "" },
      {
        imgSrc: "./images/github.svg",
        href: "https://github.com/wooinwoo/react-shop",
      },
    ],
  },
  {
    front: {
      title: "개인 포트폴리오",
      imgSrc: "./images/lawsCloud.png",
      explanation: "NextJs를 사용한 자기소개 웹페이지 입니다.",
    },
    back: {
      developPeriod: "22.09 ~ 22.10 (1인개발)",
      explanation: "우인우 포트폴리오 소개[TimeLine, skills, Project]",
      myContribution: ["반응형 웹 적용", "NextJs를 사용한 SSR 웹 개발"],
      skills: { front: "Next.js, Tailwind CSS", deploy: "AWS(S3,CloudFront)" },
    },
    icons: [
      { imgSrc: "./images/home.svg", href: "" },
      {
        imgSrc: "./images/github.svg",
        href: "https://github.com/wooinwoo/AboutMePage",
      },
    ],
  },
];

export default function Project() {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  return (
    <Layout page={"project"}>
      <section className="flex flex-col lg:flex-row text-gray-600 body-font container justify-center px-5  md:px-28 mx-auto">
        <ProjectCard
          projectValue={projectValue}
          currentImgIndex={currentImgIndex}
          setCurrentImgIndex={setCurrentImgIndex}
        />
        <ProjectList
          projectValue={projectValue}
          currentImgIndex={currentImgIndex}
          setCurrentImgIndex={setCurrentImgIndex}
        />
      </section>
    </Layout>
  );
}
