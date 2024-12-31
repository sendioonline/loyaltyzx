import userImage from "@/public/user-image.jpg";
import Link from "next/link";
import RightArrow from "@/components/ui-components/rightarrow";
async function MainBanner({ buttonLink, buttonText }) {
  return (
    <section className="main-banner grid grid-flow-col grid-rows-2 sm:grid-rows-2 sm:grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-4 p-4 md:p-0 bg-bgMain/5 dark:bg-bgSecondary">
      <div
        style={{
          backgroundImage: `url(${userImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full object-cover h-72 lg:w-full md:h-[calc(100vh-144px)] bg-cover bg-center rounded-[20px] md:rounded-r-[40px] md:rounded-l-[0]"
      ></div>
      <div className="flex items-center justify-center">
        <main className="max-w-screen-xl px-4 lg:px-16">
          <div className="text-center md:text-left">
            <div className="">
              <h2 className="max-w-2xl mb-6 text-4xl font-semibold tracking-tight leading-none md:text-4xl xl:text-6xl text-stone-950 dark:text-white">
                The Ultimate Customer Loyalty Solution
              </h2>
              <p className="max-w-2xl mb-6 font-normal tracking-tight lg:mb-8 md:text-lg lg:text-xl text-stone-850 dark:text-gray-400">
                Elevate your business with personalized customer experiences,
                drive customer engagement, reward loyalty, and gain actionable
                insights—all with a single, powerful tool!
              </p>
              <Link
                href={buttonLink}
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-bgMain hover:bg-bgSecondary transition focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
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

export default MainBanner;
