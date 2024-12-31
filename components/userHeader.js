import Image from "next/image";
import Logo from "@/public/loyaltyzx.png";
import Link from "next/link";
import HeaderMenu from "./headerMenu";
function UserHeader({ shopName }) {
  return (
    <header className="p-8">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <div className="logo w-20">
            <Link href={`/${shopName}`}>
              <Image
                className="size-full rounded-md"
                src={Logo}
                alt="loyaltyzx logo"
              />
            </Link>
          </div>
        </div>
        <div className="flex lg:flex-1 lg:justify-end gap-4 items-center">
          <HeaderMenu shopName={shopName} />
        </div>
      </nav>
    </header>
  );
}

export default UserHeader;
