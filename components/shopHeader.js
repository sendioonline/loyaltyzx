import Image from "next/image";
import Logo from "../public/loyaltyzx.jpg";
import Link from "next/link";
async function ShopHeader() {
  return (
    <header className="bg-white dark:bg-gray-900">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between py-5 p-4"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <div className="logo w-16">
            <Link href="/">
              <Image
                className="size-full rounded-md"
                src={Logo}
                alt="loyaltyzx logo"
              />
            </Link>
          </div>
        </div>
        <div className="flex lg:flex-1 lg:justify-end gap-4 items-center">
          <Link
            className="inline-flex items-center justify-center px-5 py-2 mr-3 text-base font-medium text-center text-white rounded-lg bg-bgMain hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            href={`/login`}
          >
            Sign In
          </Link>
          <Link
            className="inline-flex items-center justify-center px-5 py-2 mr-3 text-base font-medium text-center text-white rounded-lg bg-bgSecondary hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            href={`/register`}
          >
            Join Now
          </Link>
          {/* <ThemeToggle />
          <Link href={`/login`}>
            <div className="user w-14 bg-bgMain p-3 rounded-lg cursor-pointer">
              <Image className="size-full" src={User} alt="User Icon" />
            </div>
          </Link> */}
        </div>
      </nav>
    </header>
  );
}

export default ShopHeader;
