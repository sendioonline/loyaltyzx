import Image from "next/image";
import Logo from "../public/loyaltyzx.png";
import Link from "next/link";
function MainHeader() {
  return (
    <header className="p-8">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <div className="logo w-20">
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
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center text-white rounded-lg bg-bgSecondary hover:bg-bgMain transition focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            href={`/get-started`}
          >
            Book a demo
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

export default MainHeader;
