import Image from "next/image";
import shopingImage from "../../public/Online-Shopping.svg";
import userImage from "../../public/user-image.jpg";
import Link from "next/link";
import RightArrow from "../ui-components/rightarrow";
function Hero({ buttonLink, buttonText }) {
  return (
    <section className="bg-slate-50 dark:bg-gray-900/70">
      <div className="grid max-w-screen-xl px-6 mx-auto gap-12 md:gap-24 py-12 lg:py-28 lg:grid-cols-2">
        <div className="mr-auto place-self-center order-2 md:order-1">
          <h3 className="max-w-2xl mb-4 text-lg uppercase font-extrabold tracking-tight leading-none dark:text-white">
            Best Customer
          </h3>
          <h2 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Loyalty Management
          </h2>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Create personalized customer experiences, influence consumer
            behavior, reward your clients & analyze member data using just one
            tool
          </p>
          <Link
            href={buttonLink}
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-bgMain hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            {buttonText}
            <RightArrow />
          </Link>
        </div>
        <div className="lg:mt-0 order-1 md:order-2 md:mb-0">
          <Image
            className="rounded-3xl shadow-xl"
            src={userImage}
            alt="Online Shoping"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
