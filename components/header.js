import Image from "next/image";
import Logo from "../public/loyaltyzx.jpg";
import User from "../public/user.png";
import Link from "next/link";
import ThemeToggle from "./themeToggle";
function Header() {
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
          <ThemeToggle />
          <Link href="/dashboard">
            <div className="user w-14 bg-bgMain p-3 rounded-lg cursor-pointer">
              <Image className="size-full" src={User} alt="User Icon" />
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
