import Image from "next/image";
import Step1 from "@/public/Illustration-4.png";
import Step2 from "@/public/Illustration-3.png";
import Step3 from "@/public/Illustration-2.png";
import Link from "next/link";

function MainSteps() {
  return (
    <section className="steps-area p-8 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="all-steps grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8">
          <Link href="/register">
            <div className="step w-full text-center flex flex-col justify-center items-center">
              <Image src={Step1} height={150} alt="Step Image" />
              <h2 className="mt-4 text-xl font-medium text-stone-950 dark:text-white">
                Signup your business and start loyalty program
              </h2>
            </div>
          </Link>
          <Link href="/register">
            <div className="step w-full text-center flex flex-col justify-center items-center">
              <Image src={Step2} height={150} alt="Step Image" />
              <h2 className="mt-4 text-xl font-medium text-stone-950 dark:text-white">
                Setup your loyalty program and start promoting!
              </h2>
            </div>
          </Link>
          <Link href="/register">
            <div className="step w-full text-center flex flex-col justify-center items-center">
              <Image src={Step3} height={150} alt="Step Image" />
              <h2 className="mt-4 text-xl font-medium text-stone-950 dark:text-white">
                Analyze the data and see your sales grow!.
              </h2>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MainSteps;
