import Link from "next/link";
import RightArrow from "../ui-components/rightarrow";

function Banner({ bgImage, buttonLink, buttonText, heading, text }) {
  return (
    <>
      <div className="grid grid-flow-col grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 gap-4">
        <div
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-full object-cover h-72 lg:w-full md:h-[calc(100vh-100px)] bg-cover bg-center"
        ></div>
        <div className="flex items-center justify-center">
          <main className="max-w-screen-xl px-4 lg:px-16">
            <div className="text-left">
              <div className="">
                <h3 className="max-w-2xl mb-4 text-lg uppercase font-extrabold tracking-tight leading-none dark:text-white">
                  {heading}
                </h3>
                <h2 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                  Loyalty Management
                </h2>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                  {text}
                </p>
                <Link
                  href={buttonLink}
                  className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-bgMain hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                >
                  {buttonText}
                  <RightArrow />
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Banner;
