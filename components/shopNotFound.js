import Image from "next/image";
import Link from "next/link";
import RightArrow from "./ui-components/rightarrow";

function ShopNotFound() {
  return (
    <section className="signup-area p-4 py-40 bg-slate-50 dark:bg-bgSecondary">
      <div className="mx-auto max-w-7xl">
        <div className="all-signup grid grid-cols-1 bg-bgMain/10 p-8 py-20 rounded-3xl">
          <div className="started w-full p-2">
            <div className="started-text text-center">
              <h2 className="text-4xl mb-4 font-bold">Shop not found</h2>
              <p className="my-6 text-xl">Visit Our Registered Shop</p>
              <Link
                href="http://localhost:3000/"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-bgMain hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Our Shops
                <RightArrow />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopNotFound;
