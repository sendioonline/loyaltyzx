import Link from "next/link";
import Facebook from "./ui-components/facebook";
import Twitter from "./ui-components/twitter";

async function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900/85 pt-12">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-1 gap-12 px-4 py-6 lg:py-8 md:grid-cols-[2fr_3fr_3fr]">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Quick Link
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link href="" className="hover:underline">
                  Menu
                </Link>
              </li>
              <li className="mb-4">
                <Link href="" className="hover:underline">
                  Takeaway
                </Link>
              </li>
              <li className="mb-4">
                <Link href="" className="hover:underline">
                  Booking Table
                </Link>
              </li>
              <li className="mb-4">
                <Link href="" className="hover:underline">
                  Gift Card
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              About Us
            </h2>
            <p className="leading-7 text-gray-500 dark:text-gray-400">
              loyaltyzx.com is part of Vivamart AS , A leader in technology and
              services provider for restaurant and retail industry. Vivamart AS
              , Org nr: 919138262
            </p>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Contact Us
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                Email Us:
                <Link href="" className="hover:underline">
                  contact@reviewzx.com
                </Link>
              </li>
              <li className="mb-4">
                Contact:
                <Link href="" className="hover:underline">
                  +4794090001
                </Link>
              </li>
              <li className="mb-4">
                Address:
                <Link href="" className="hover:underline">
                  Torvveein 19, 1383 Asker
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" bg-gray-100 dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl px-4 py-6  md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2024 <a href="https://flowbite.com/">Loyaltyzx™</a>. All Rights
            Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <Link
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <Facebook />
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <Twitter />
              <span className="sr-only">Twitter page</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
