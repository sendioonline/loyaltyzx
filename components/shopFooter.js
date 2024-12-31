import Link from "next/link";
import Facebook from "./ui-components/facebook";
import Twitter from "./ui-components/twitter";

function ShopFooter({ singleShopData }) {
  return (
    <footer className="bg-bgMain/5 dark:bg-bgSecondary pt-12">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-1 gap-12 px-4 py-6 lg:py-8 md:grid-cols-[2fr_3fr_3fr]">
          <div>
            <h2 className="mb-5 text-lg font-semibold text-stone-950 uppercase dark:text-white">
              Quick Link
            </h2>
            <ul className="text-stone-800 dark:text-white">
              <li className="mb-4">
                <Link
                  target="_blank"
                  href={
                    singleShopData?.meta?.menuurl
                      ? singleShopData?.meta?.menuurl
                      : singleShopData?.website
                  }
                  className="hover:underline font-medium"
                >
                  Menu
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  target="_blank"
                  href={
                    singleShopData?.meta?.takewaway_url
                      ? singleShopData?.meta?.takewaway_url
                      : singleShopData?.website
                  }
                  className="hover:underline font-medium"
                >
                  Takeaway
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  target="_blank"
                  href={
                    singleShopData?.booking_url?.en
                      ? singleShopData?.booking_url?.en
                      : singleShopData?.website
                  }
                  className="hover:underline font-medium"
                >
                  Booking Table
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  target="_blank"
                  href={
                    singleShopData?.copybooklinkGift
                      ? singleShopData?.copybooklinkGift
                      : singleShopData?.website
                  }
                  className="hover:underline font-medium"
                >
                  Gift Card
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-5 text-lg font-semibold text-stone-950 uppercase dark:text-white">
              About Us
            </h2>
            <p className="leading-7 text-stone-800 dark:text-white">
              Loyaltyzx.com is part of Vivamart AS , A leader in technology and
              services provider for restaurant and retail industry. Vivamart AS
              , Org nr: 919138262
            </p>
          </div>
          <div>
            <h2 className="mb-5 text-lg font-semibold text-stone-950 uppercase dark:text-white">
              Contact Us
            </h2>
            <ul className="text-stone-800 dark:text-white">
              <li className="mb-4">
                Email Us:{" "}
                <Link
                  href={`mailto:${singleShopData?.signature?.company_email}`}
                  className="hover:underline font-medium"
                >
                  {singleShopData?.signature?.company_email}
                </Link>
              </li>
              <li className="mb-4">
                Contact:{" "}
                <Link
                  href={`tel:${singleShopData?.signature?.company_phone}`}
                  className="hover:underline font-medium"
                >
                  {singleShopData?.signature?.company_phone}
                </Link>
              </li>
              <li className="mb-4">
                Address:{" "}
                <Link
                  target="_blank"
                  href={`https://www.google.com/search?q=${singleShopData?.signature?.compaddr}`}
                  className="hover:underline font-medium"
                >
                  {singleShopData?.signature?.compaddr}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" bg-bgMain/5 dark:bg-bgSecondary">
        <div className="mx-auto w-full max-w-screen-xl px-4 py-6  md:flex md:items-center md:justify-between">
          <span className="text-sm text-stone-800 dark:text-white sm:text-center">
            © 2024 <a href="#">Loyaltyzx™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <Link href="#" className="text-stone-800 dark:text-white">
              <Facebook />
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link href="#" className="text-stone-800 dark:text-white">
              <Twitter />
              <span className="sr-only">Twitter page</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default ShopFooter;
