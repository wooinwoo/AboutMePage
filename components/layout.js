import Header from "../pages/header";

export default function Layout({ children }) {
  return (
    <div className="grid h-screen place-items-center">
      <section className="group relative w-full p-5 md:w-[768px] lg:w-[1024px] xl:w-[1280px] mx-auto min-h-[700px]">
        <div className="absolute top-0 left-0">
          <svg width="300" height="300">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop
                  offset="0"
                  stop-color="yellow"
                  className="transition-all duration-700  group-hover:[stop-color:#993399]"></stop>
                <stop
                  offset=".5"
                  stop-color="#993399"
                  className="transition-all duration-700  group-hover:[stop-color:yellow]"></stop>
                <stop
                  offset="1"
                  stop-color="yellow"
                  className="transition-all duration-700  group-hover:[stop-color:#993399]"></stop>
              </linearGradient>
            </defs>
            <path
              fill="url(#grad1)"
              d="M8 0h292l-20 20H25a5 5 0 0 0-5 5v255L0 300V8a8 8 0 0 1 8-8Z"></path>
          </svg>
        </div>
        <Header />
        <div className="mt-10">{children}</div>
        <div className="absolute bottom-0 right-0 rotate-180">
          <svg
            width="300"
            height="300"
            data-name="corner-top-left"
            xmlns="http://www.w3.org/2000/svg"
            data-inlinesvg=".inlineSvgFile-7">
            <path
              fill="url(#grad1)"
              d="M8 0h292l-20 20H25a5 5 0 0 0-5 5v255L0 300V8a8 8 0 0 1 8-8Z"></path>
          </svg>
        </div>
      </section>
    </div>
  );
}
