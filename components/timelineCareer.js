export default function TimelineCareer({ careerValue, toggle }) {
  return (
    <div
      className="shrink-0 w-full -my-8 divide-y-2 divide-gray-100 duration-700"
      style={toggle == "career" ? { opacity: "1.0" } : { opacity: "0" }}>
      {careerValue.map((e) => (
        <div className="py-8 flex flex-wrap md:flex-nowrap">
          <div className="pr-2 md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <span className="font-semibold title-font text-gray-700 dark:text-gray-300">
              {e.title}
            </span>
            <span className="mt-1 text-gray-500 text-sm">{e.period}</span>
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
  );
}
