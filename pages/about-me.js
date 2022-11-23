import Layout from "../components/layout";

export default function AboutMe() {
  return (
    <Layout page={"about-me"}>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5  md:flex-row flex-col">
          <div className="lg:flex-grow lg:pr-24 md:pr-16 flex flex-col lg:flex-row md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div>
              <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium text-gray-900">
                Welcome !
              </h1>
              <p>
                안녕하세요! <br />
                개발이 즐거운 프론트엔드 개발자 우인우입니다! <br />
                <br />
                저만의 학습 규칙을 만들어 성장하는 습관을 만드려고 노력합니다.
                <br />
                <br />
                다양한 고등학교 파이썬 산학 강사 경험으로 저의 의견 잘 전달 할
                수 있습니다.
                <br />
                <br />
                개발 태도에 있어 고집이 없고 타인의 의견을 바로 수용합니다.
                <br />
                <br />
                최근에는 기존 프로젝트의 성능 개선과 최신 트렌드 기술을 많이
                접하려고 매일 학습에 매진하는 중입니다.
                <br />
                <br /> 앞으로 좋은 모습 보여드리겠습니다!
              </p>
            </div>
            <div className="my-10">
              <p>
                <em>Contact.·.·</em>
                <br /> <span className="text-rose-700">Email.</span>{" "}
                <a href="mailto:wooin1001@gmail.com">wooin1001@gmail.com</a>{" "}
                <br />
                <span className="text-rose-700">Phone.</span>
                <a href="tel:010-2324-8983">010 2324 8983</a>
              </p>
              <br />
              <p>
                <em>Channel.·.·</em>
                <br /> <span className="text-rose-700">Blog.</span>{" "}
                <a href="https://bhk1324.tistory.com/">bhk1324.tistory.com</a>
                <br />
                <span className="text-rose-700">Github.</span>{" "}
                <a href="https://github.com/wooinwoo">github.com/wooinwoo</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
