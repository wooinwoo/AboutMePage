import Layout from "../components/layout";
const skillsValue = [
  {
    title: "Frontend",
    imgList: [
      "https://tech.osci.kr/wp-content/uploads/2022/05/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA-2022-05-03-%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE-3.57.02.png",
    ],
  },
  {
    title: "Communication",
    imgList: [
      "https://velog.velcdn.com/images/isitcake_yes/post/77f3d123-957e-491c-a127-01d69b93c2a8/image.png",
    ],
  },
  { title: "Deployment", imgList: [] },
  { title: "Version Control", imgList: [] },
];

export default function Skills() {
  return (
    <Layout page={"skills"}>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 pb-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              Skills
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            {skillsValue.map((e) => (
              <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
                <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                  <h1 class="text-3xl text-gray-600 dark:text-gray-400 pb-4 mb-4 border-b-[0.5px] border-gray-600 dark:border-gray-400 leading-none">
                    {e.title}
                  </h1>
                  <div className="flex">
                    {e.imgList.map((e) => (
                      <img src={e} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
