import Image from "next/image";
import HappyCustomer from "@/public/happy.jpg";
import ShopBannerButton from "./shopBannerButton";

function SignupBanner({
  buttonLink,
  buttonLinkTwo,
  buttonText,
  buttonTextTwo,
}) {
  return (
    <section className="signup-area p-4 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="all-signup grid grid-cols-1 sm:grid-cols-2 gap-16 rounded-3xl">
          <div className="signup w-full p-2">
            <div className="signup-image flex flex-col items-center">
              <Image
                src={HappyCustomer}
                alt="Happy Customer"
                className="rounded-3xl"
              />
            </div>
          </div>
          <div className="started w-full p-2 flex items-center">
            <div className="started-text">
              <h2 className="text-2xl font-semibold mb-6 tracking-tight text-stone-900">
                Welcome to the ultimate loyalty program designed just for food
                lovers like you!
              </h2>
              {/* <p className="mb-4">
                
              </p> */}
              {/* <Link
                href={`/${shopName}/signup`}
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-bgMain hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Join Now
                <RightArrow />
              </Link> */}
              <ShopBannerButton
                buttonLink={buttonLink}
                buttonLinkTwo={buttonLinkTwo}
                buttonText={buttonText}
                buttonTextTwo={buttonTextTwo}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignupBanner;
