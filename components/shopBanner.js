import Link from "next/link";
import RightArrow from "@/components/ui-components/rightarrow";
import ShopBannerButton from "./shopBannerButton";
async function ShopBanner({
  bgImage,
  heading,
  mainHeading,
  text,
  buttonLink,
  buttonLinkTwo,
  buttonText,
  buttonTextTwo,
}) {
  return (
    <section className="grid grid-flow-col grid-rows-2 sm:grid-rows-2 sm:grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-4 p-4 md:p-0 bg-bgMain/5 dark:bg-bgSecondary">
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
        className="w-full object-cover h-72 lg:w-full md:h-[calc(100vh-144px)] bg-cover bg-center rounded-[20px] md:rounded-r-[40px] md:rounded-l-[0]"
      ></div>
      <div className="flex items-center justify-center">
        <main className="max-w-screen-xl px-4 lg:px-16">
          <div className="text-center md:text-left">
            <div className="">
              <h3 className="max-w-2xl mb-4 text-lg uppercase font-extrabold tracking-tight text-stone-950 leading-none dark:text-white">
                {heading}
              </h3>
              <h2 className="max-w-2xl mb-6 text-4xl font-semibold tracking-tight leading-none md:text-4xl xl:text-6xl text-stone-950 dark:text-white">
                {mainHeading}
              </h2>
              <p className="max-w-2xl mb-6 font-normal tracking-tight lg:mb-8 md:text-lg lg:text-xl text-stone-850 dark:text-gray-400">
                {text}
              </p>
              <ShopBannerButton
                buttonLink={buttonLink}
                buttonLinkTwo={buttonLinkTwo}
                buttonText={buttonText}
                buttonTextTwo={buttonTextTwo}
              />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}

export default ShopBanner;
