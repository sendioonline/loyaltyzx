import userImage from "../../public/user-image.jpg";
import Link from "next/link";
import RightArrow from "../ui-components/rightarrow";
async function Hero({ buttonLink, buttonText }) {
  return (
    <section className="grid grid-flow-col grid-rows-2 sm:grid-rows-2 sm:grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-4 p-4 md:p-0">
      <div
        style={{
          backgroundImage: `url(${userImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full object-cover h-72 lg:w-full md:h-[calc(100vh-103px)] bg-cover bg-center rounded-[20px] md:rounded-r-[40px] md:rounded-l-[0]"
      ></div>
      <div className="flex items-center justify-center">
        <main className="max-w-screen-xl px-4 lg:px-16">
          <div className="text-center md:text-left">
            <div className="">
              <h3 className="max-w-2xl mb-4 text-lg uppercase font-extrabold tracking-tight leading-none dark:text-white">
                Best Customer
              </h3>
              <h2 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Loyalty Management
              </h2>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Create personalized customer experiences, influence consumer
                behavior, reward your clients & analyze member data using just
                one tool
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
    </section>
  );
}

export default Hero;
