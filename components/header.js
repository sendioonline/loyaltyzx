import Image from "next/image";
import Logo from "../public/loyaltyzx.jpg";
import User from "../public/user.png";
import Link from "next/link";
import ThemeToggle from "./themeToggle";
function header() {
  return (
    <header>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between py-6 p-4"
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
          <ThemeToggle />
          <div className="user w-20 bg-bgMain p-4 rounded-lg">
            <Image className="size-full" src={User} alt="User Icon" />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default header;
