import Layout from "../components/layout";

import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>우인우 포트폴리오</title>
        <meta name="description" content="우인우 포트폴리오" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium text-gray-900">
                W.Inwoo
                <br />
                <span className="text-2xl">Front-End Developer</span>
              </h1>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Button
                </button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
