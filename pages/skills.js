import Layout from "../components/layout";
const skillsValue = [
  {
    title: "Frontend",
    imgList: [
      { img: "./images/skills/html.png", width: "30%" },
      { img: "./images/skills/CSS3.png", width: "30%" },
      { img: "./images/skills/JavaScript.png", width: "30%" },
      { img: "./images/skills/ts.svg", width: "40%" },
      { img: "./images/skills/Sass.png", width: "40%" },
      { img: "./images/skills/tailwindcss.png", width: "100%" },
      { img: "./images/skills/React.png", width: "100%" },
      { img: "./images/skills/Nextjs.png", width: "100%" },
      { img: "./images/skills/jquery.png", width: "100%" },
      { img: "./images/skills/recoil.png", width: "40%" },
      { img: "./images/skills/Redux.png", width: "50%" },
    ],
  },
  {
    title: "Backend",
    imgList: [{ img: "./images/skills/firebase.png", width: "100%" }],
  },
  {
    title: "Deployment",
    imgList: [
      { img: "./images/skills/netlify.png", width: "100%" },
      { img: "./images/skills/vercel.png", width: "100%" },
      { img: "./images/skills/Amazon.png", width: "100%" },
    ],
  },
  {
    title: "Version Control",
    imgList: [
      { img: "./images/skills/git.png", width: "100%" },
      { img: "./images/skills/github.png", width: "100%" },
    ],
  },
  {
    title: "Communication",
    imgList: [
      { img: "./images/skills/slack.png", width: "100%" },
      { img: "./images/skills/figma.png", width: "100%" },
      { img: "./images/skills/notion.png", width: "100%" },
    ],
  },
];

export default function Skills() {
  return (
    <Layout page={"skills"}>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 mx-auto relative">
          <div class="flex flex-wrap flex-col content-around -m-4 h-full xl:h-[900px] lg:h-[1000px] md:h-[1500px]">
            {skillsValue.map((e) => (
              <div class="shrink-0 p-4 min-w-[300px] xl:w-1/4 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full p-6 rounded-lg border-2 border-gray-30 dark:bg-gray-300 flex flex-col relative overflow-hidden">
                  <h1 class="text-3xl text-gray-600 dark:text-gray-800 pb-4 mb-4 border-b-[0.5px] border-gray-600 dark:border-gray-400 leading-none">
                    {e.title}
                  </h1>
                  <div>
                    {e.imgList.map((e) => (
                      <img
                        src={e.img}
                        className={`inline-block w-[${e.width}] mx-[1%] hover:-translate-y-2 duration-700`}
                      />
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
