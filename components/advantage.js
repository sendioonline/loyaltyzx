import CartTwo from "@/public/cart3.png";
import Adv1 from "@/public/money-bag-2.png";
import Adv2 from "@/public/statistics.png";
import Adv3 from "@/public/real-estate.png";
import Adv4 from "@/public/pie-chart.png";
import Image from "next/image";
function Advantage() {
  return (
    <section className="about-area p-8 py-36">
      <div className="mx-auto max-w-7xl">
        <div className="all-steps grid grid-cols-1 md:grid-cols-[4fr_3fr] gap-32">
          <div className="about-text">
            <h2 className="text-3xl font-semibold mb-8 tracking-tight text-stone-900">
              Many reason to choose loyality program
            </h2>
            <ul className="w-full text-gray-500 list-inside dark:text-gray-400">
              <li className="flex my-8 gap-6 items-center">
                <div className="adv-image w-16">
                  <Image src={Adv1} width={64} height={64} alt="Cart Image" />
                </div>
                <div className="adv-text flex-1">
                  <h3 className="font-bold mb-1 tracking-tight text-stone-900">
                    More likely to continue shop
                  </h3>
                  <p className="font-normal text-stone-950 dark:text-gray-400">
                    85% say loyalty programs make more likely to continue to
                    shop with brands
                  </p>
                </div>
              </li>
              <li className="flex my-8 gap-6 items-center">
                <div className="adv-image w-16">
                  <Image src={Adv2} width={64} height={64} alt="Cart Image" />
                </div>
                <div className="adv-text flex-1">
                  <h3 className="font-bold mb-1 tracking-tight text-stone-900">
                    Modify the amount they spend for benefits
                  </h3>
                  <p className="font-normal text-stone-950 dark:text-gray-400">
                    73% say they are likely to modify their behavior for loyalty
                    benefits
                  </p>
                </div>
              </li>
              <li className="flex my-8 gap-6 items-center">
                <div className="adv-image w-16">
                  <Image src={Adv3} width={64} height={64} alt="Cart Image" />
                </div>
                <div className="adv-text flex-1">
                  <h3 className="font-bold mb-1 tracking-tight text-stone-900">
                    High Return on Investment
                  </h3>
                  <p className="font-normal text-stone-950 dark:text-gray-400">
                    96% of loyalty program owners reported positive ROI, with
                    the average ROI being 4.8x.
                  </p>
                </div>
              </li>
              <li className="flex my-8 gap-6 items-center">
                <div className="adv-image w-16">
                  <Image src={Adv4} width={64} height={64} alt="Cart Image" />
                </div>
                <div className="adv-text flex-1">
                  <h3 className="font-bold mb-1 tracking-tight text-stone-900">
                    Higher loyalty
                  </h3>
                  <p className="font-normal text-stone-950 dark:text-gray-400">
                    79% of customers say theyre more likely to recommend brands
                    with good loyalty programs.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="about-image flex justify-center">
            <Image
              className="w-full"
              src={CartTwo}
              width={550}
              alt="Cart Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advantage;
