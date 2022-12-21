import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout page={"home"}>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pb-5 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 lg:pr-20 sm:pb-8">
                <img
                  src="./images/wooinwoo.jpg"
                  className="inline-block w-24 rounded-full"
                />
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 dark:text-gray-100 text-lg">
                    Profile
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2"></div>
                  <div className="h-full mt-10 mb-5 flex items-center text-slate-600 dark:text-slate-400 ">
                    <div>
                      <p className="text-start">
                        <em className="inline-block m-auto">Contact.·.·</em>
                        <br /> <span className="text-rose-700">Email.</span>
                        <a
                          href="mailto:wooin1001@gmail.com"
                          className="duration-1000 hover:text-rose-400 dark:hover:text-rose-200">
                          wooin1001@gmail.com
                        </a>
                        <br />
                        <span className="text-rose-700">Phone.</span>
                        <a
                          href="tel:010-2324-8983"
                          className="duration-1000 hover:text-rose-400 dark:hover:text-rose-200">
                          010 2324 8983
                        </a>
                      </p>
                      <br />
                      <p className="text-start">
                        <em>Channel.·.·</em>
                        <br /> <span className="text-rose-700">Blog.</span>
                        <a
                          href="https://bhk1324.tistory.com/"
                          target="_blank"
                          className="duration-1000 hover:text-rose-400 dark:hover:text-rose-200">
                          bhk1324.tistory.com
                        </a>
                        <br />
                        <span className="text-rose-700">Github.</span>
                        <a
                          href="https://github.com/wooinwoo"
                          target="_blank"
                          className="duration-1000 hover:text-rose-400 dark:hover:text-rose-200">
                          github.com/wooinwoo
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 lg:pl-20 sm:pt-0 sm:pb-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-100">
                  Welcome !
                </h1>
                <p className="text-slate-600 dark:text-slate-400">
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
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
