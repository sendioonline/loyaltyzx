import AboutImage from "@/public/reword-image.png";
import Image from "next/image";
function About() {
  return (
    <section className="about-area p-8 pb-36">
      <div className="mx-auto max-w-7xl">
        <div className="about grid grid-cols-1 md:grid-cols-[3fr_4fr] gap-32">
          <div className="about-image">
            <Image
              className="w-full"
              src={AboutImage}
              width={550}
              alt="Cart Image"
            />
          </div>
          <div className="about-text flex flex-col justify-center">
            <h2 className="text-3xl font-semibold mb-4 tracking-tight text-stone-900">
              A Customer Loyalty platform built for you!
            </h2>
            <p className="mb-6 text-xl font-normal tracking-tight text-stone-950 dark:text-gray-400">
              Boost customer retention, engage your customer, and encourage
              repeat purchases with our intuitive and fully customizable loyalty
              platform.
            </p>
            <ul className="w-full text-gray-500 list-inside dark:text-gray-400">
              <li className="flex mb-5 font-normal text-stone-950 dark:text-gray-400">
                <svg
                  className="w-3.5 h-3.5 mt-1.5 me-2 text-bgMain dark:text-bgMain flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Save countless development hours by leveraging our ready-to-use
                loyalty features.
              </li>
              <li className="flex mb-5 font-normal text-stone-950 dark:text-gray-400">
                <svg
                  className="w-3.5 h-3.5 mt-1.5 me-2 text-bgMain dark:text-bgMain flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Manage all customer interactions seamlessly from a centralized
                dashboard.
              </li>
              <li className="flex mb-5 font-normal text-stone-950 dark:text-gray-400">
                <svg
                  className="w-3.5 h-3.5 mt-1.5 me-2 text-bgMain dark:text-bgMain flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Unlock the power of integrated data by connecting effortlessly
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
