import AboutImage from "@/public/points.png";
import Image from "next/image";
function ShopAbout() {
  return (
    <section className="about-area px-8 pt-28 bg-bgMain/5 dark:bg-bgSecondary">
      <div className="mx-auto max-w-7xl">
        <div className="about grid grid-cols-1 gap-32">
          <div className="about-text flex flex-col justify-center">
            <h2 className="text-3xl font-semibold mb-6 tracking-tight text-stone-900 text-center">
              With our loyalty program, you enjoy better experiences from day
              one.
            </h2>
            <p className="mb-8 text-xl font-normal tracking-tight text-stone-950 dark:text-gray-400 text-center">
              Whether you order online or eat in restaurant, your loyaalty
              membership brings value in many ways. The more you eat and the
              more points you earn, the faster you reach the next membership
              level with even greater benefits awaiting you!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopAbout;
