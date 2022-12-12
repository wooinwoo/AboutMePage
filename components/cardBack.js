export default function CardBack({ e }) {
  return (
    <div className="flex flex-col justify-between text-black z-10 p-2 md:px-10 absolute top-0 left-0 w-full h-full bg-gray-300 dark:bg-gray-700 rounded-lg duration-1000 card_back">
      <div>
        <h2 className="flex justify-center text-xl text-gray-900 font-medium title-font mx-auto dark:text-white">
          {e.front.title}
        </h2>
        <p className="flex justify-center text-sm dark:text-gray-300 mb-3">
          {e.back.developPeriod}
        </p>
        <p className="font-bold dark:text-gray-300 mb-1"># 주요 기능 설명</p>
        <p className="text-sm dark:text-gray-300 mb-3">{e.back.explanation}</p>
        <p className="font-bold dark:text-gray-300 mb-1"># 나의 기여도</p>
        <nav class="flex flex-col sm:items-start sm:text-left text-center items-start -mb-1 space-y-2">
          {e.back.myContribution.map((e) => (
            <div className="flex justify-center">
              <span className=" bg-gray-800 text-indigo-400 w-4 h-4 mr-3 rounded-full inline-flex items-center justify-center">
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
              <span className="text-sm text-start dark:text-gray-300">{e}</span>
            </div>
          ))}
        </nav>
      </div>
      <div>
        <p className="font-bold dark:text-gray-300"># Skills</p>
        <div className="topBorder pb-4">
          {"front" in e.back.skills && (
            <div className="dark:text-gray-300 text-sm">
              <span className="font-bold mr-6">Frontend:</span>
              {e.back.skills.front}
            </div>
          )}
          {"back" in e.back.skills && (
            <div className="dark:text-gray-300 text-sm">
              <span className="font-bold mr-5">Backend:</span>
              {e.back.skills.back}
            </div>
          )}
          {"deploy" in e.back.skills && (
            <div className="dark:text-gray-300 text-sm">
              <span className="font-bold">Deployment:</span>{" "}
              {e.back.skills.deploy}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
