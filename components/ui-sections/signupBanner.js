import Image from "next/image";
import HappyCustomer from "../../public/happy.jpg";
import Link from "next/link";
import RightArrow from "../ui-components/rightarrow";

async function SignupBanner({ shopName }) {
  return (
    <section className="signup-area p-4 pb-20 bg-slate-50 dark:bg-bgSecondary">
      <div className="mx-auto max-w-7xl">
        <div className="all-signup grid grid-cols-1 sm:grid-cols-2 gap-10 bg-bgMain/10 p-8 rounded-3xl">
          <div className="signup w-full p-2">
            <div className="signup-image flex flex-col items-center">
              <Image
                src={HappyCustomer}
                alt="Happy Customer"
                className="rounded-3xl"
              />
            </div>
          </div>
          <div className="started w-full p-2 flex items-center text-center">
            <div className="started-text">
              <h2 className="text-2xl mb-4">
                It’s easier than ever to go together
              </h2>
              <p className="mb-4">
                Travel is better when you can share it with your best friend.
                Find all the tips, guides, and tools you need to take a dream
                trip with your dog.
              </p>
              <Link
                href={`/${shopName}/register`}
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-bgMain hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Join Now
                <RightArrow />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignupBanner;
