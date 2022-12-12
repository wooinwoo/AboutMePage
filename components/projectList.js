export default function ProjectList({
  projectValue,
  currentImgIndex,
  setCurrentImgIndex,
}) {
  return (
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
                    className="inline-block absolute bottom-0 left-0 w-full h-[2px] duration-700 z-0 group-hover:z-10"
                    style={{
                      background:
                        "linear-gradient(135deg,#CBCE91 0%,#76528B 50%,#CBCE91 100%)",
                      opacity: currentImgIndex === idx ? "1" : "0",
                    }}
                  />
                  <span
                    className="inline-block absolute bottom-0 left-0 w-full h-[2px] duration-700 z-10 group-hover:z-0"
                    style={{
                      background:
                        "linear-gradient(135deg,#76528B 0%,#CBCE91 50%,#76528B 100%)",
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
              "linear-gradient(135deg,#CBCE91 0%,#76528B 50%,#CBCE91 100%)",
          }}></div>
        <div
          className="absolute w-[90px] h-[90px] -z-10 -top-1 -left-1 rounded-tl-lg duration-700 opacity-0 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(135deg,#76528B 0%,#CBCE91 50%,#76528B 100%)",
          }}></div>
      </div>
    </div>
  );
}
