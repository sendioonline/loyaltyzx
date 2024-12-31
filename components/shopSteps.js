import Image from "next/image";
import Cart from "@/public/chart2.png";
import Icon1 from "@/public/reward.png";
import Icon2 from "@/public/money-bag.png";
import Icon3 from "@/public/hands-on-experience.png";
import Icon4 from "@/public/money-bag-1.png";

function ShopSteps() {
  return (
    <section className="steps-area pb-28 bg-bgMain/5 dark:bg-bgSecondary">
      <div className="mx-auto max-w-7xl">
        <div className="all-steps grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="w-full">
            <div className="step w-full text-left md:text-right flex flex-col items-start md:items-end my-8 p-4">
              <Image src={Icon1} height={50} alt="Step Icon" />
              <h2 className="my-3 text-xl font-semibold tracking-tight text-stone-900">
                01. Sign In to Get Started
              </h2>
              <p className="font-normal text-stone-950 dark:text-gray-400">
                Create an account or log in to access your exclusive rewards.
              </p>
            </div>
            <div className="step w-full text-left md:text-right flex flex-col items-start md:items-end my-8 p-4">
              <Image src={Icon3} height={50} alt="Step Icon" />
              <h2 className="my-3 text-xl font-semibold tracking-tight text-stone-900">
                04. Repeat: Eat more Earn more
              </h2>
              <p className="font-normal text-stone-950 dark:text-gray-400">
                More you eat, more you earn.
              </p>
            </div>
          </div>
          <div className="step w-full text-center flex flex-col justify-center items-center">
            <Image className="w-full" src={Cart} width={500} alt="Step Image" />
          </div>
          <div className="w-full">
            <div className="step w-full text-left flex flex-col items-start my-8 p-4">
              <Image src={Icon2} height={50} alt="Step Icon" />
              <h2 className="my-3 text-xl font-semibold tracking-tight text-stone-900">
                02. Earn Points with Every Purchase
              </h2>
              <p className="font-normal text-stone-950 dark:text-gray-400">
                Eat your favorites and automatically earn points for every
                transaction.
              </p>
            </div>
            <div className="step w-full text-left flex flex-col items-start my-4 p-4">
              <Image src={Icon4} height={50} alt="Step Icon" />
              <h2 className="my-3 text-xl font-semibold tracking-tight text-stone-900">
                03. Redeem Points for Rewards
              </h2>
              <p className="font-normal text-stone-950 dark:text-gray-400">
                Exchange your points for discounts, freebies, or special offers
                effortlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopSteps;
