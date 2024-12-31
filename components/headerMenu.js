"use client";
import Image from "next/image";
import Link from "next/link";
import LoginIcon from "@/public/login_icon.png";
import LogOurIcon from "@/public/login_complete.png";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function HeaderMenu({ shopName }) {
  const [showMenu, setShowMenu] = useState(false);
  const [userShop, setUserShop] = useState("");
  const [userStatus, setUserStatus] = useState(false);
  useEffect(() => {
    const userShopValue = sessionStorage.getItem("userShop");
    const userStatusValue = sessionStorage.getItem("userStatus");
    setUserShop(userShopValue);
    setUserStatus(userStatusValue);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (shopName !== userShop) {
        setUserStatus(false);
        sessionStorage.removeItem("customerData");
        sessionStorage.removeItem("shopID");
        sessionStorage.removeItem("userEmail");
        sessionStorage.removeItem("userShop");
        sessionStorage.removeItem("userStatus");
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [shopName, userShop]);

  const router = useRouter();
  const handelLogOut = () => {
    router.push(`/${userShop}/signin`);
    setShowMenu(!showMenu);
    sessionStorage.removeItem("customerData");
    sessionStorage.removeItem("shopID");
    sessionStorage.removeItem("userEmail");
    sessionStorage.removeItem("userShop");
    sessionStorage.removeItem("userStatus");
  };
  const handelToggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const handelDashBoard = () => {
    router.push(`/${userShop}/dashboard`);
    setShowMenu(!showMenu);
  };
  return (
    <>
      {userStatus ? (
        <>
          <div className="text-center relative">
            <div
              onClick={handelToggleMenu}
              className="user w-12 bg-bgSecondary h-12 rounded-lg flex justify-center items-center cursor-pointer"
            >
              <Image className="w-8" src={LogOurIcon} alt="User Icon" />
            </div>
            {showMenu === true ? (
              <div className="dropdown absolute w-[180px] bg-bgSecondary right-0 p-4 top-[55px] rounded-lg z-10">
                <button
                  className="inline-flex items-center justify-center px-5 py-2 w-full mb-3 text-base font-medium text-center text-white rounded-lg bg-bgMain hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                  onClick={handelDashBoard}
                >
                  Dashboard
                </button>
                <button
                  className="inline-flex items-center justify-center px-5 py-2 w-full text-base font-medium text-center text-white rounded-lg bg-bgMain hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                  onClick={handelLogOut}
                >
                  Logout
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
        </>
      ) : (
        <>
          {/* <Link
            className="inline-flex items-center justify-center px-5 py-2 mr-3 text-base font-medium text-center text-white rounded-lg bg-bgSecondary hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            href={`/${shopName}/signup`}
          >
            Register Now
          </Link> */}
          {/* <Link href={`/${shopName}/signin`}>
            <div className="user w-12 bg-bgSecondary h-12 rounded-lg flex justify-center items-center">
              <Image className="w-8" src={LoginIcon} alt="User Icon" />
            </div>
          </Link> */}
          <Link
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-bgSecondary hover:bg-bgMain focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            href={`/${shopName}/signin`}
          >
            Log in / Register
          </Link>
        </>
      )}
    </>
  );
}

export default HeaderMenu;
