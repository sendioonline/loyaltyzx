"use client";
import Image from "next/image";
import Link from "next/link";
import LoginIcon from "@/public/login_icon.png";
import LogOurIcon from "@/public/login_complete.png";
import Profile from "@/public/user-all.png";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function DashboardMenu({ shopName }) {
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
  const handelHome = () => {
    router.push(`/${userShop}`);
    setShowMenu(!showMenu);
  };
  return (
    <>
      {userStatus ? (
        <>
          <div className="text-center relative">
            <div
              onClick={handelToggleMenu}
              className="user flex justify-center items-center cursor-pointer"
            >
              <div className="profile-image">
                <Image
                  src={Profile}
                  alt="Profile image"
                  height={75}
                  width={75}
                  className="mb-4 mx-auto bg-bgMain p-1 rounded-full"
                />
              </div>
            </div>
            {showMenu === true ? (
              <div className="profile-dropdown w-[350px] mx-auto bg-bgSecondary p-4 rounded-lg z-10 mb-4">
                <button
                  className="inline-flex items-center justify-center px-5 py-2 w-full mb-3 text-base font-medium text-center text-white rounded-lg bg-bgMain hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                  onClick={handelHome}
                >
                  Home
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
          <Link
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-bgSecondary hover:bg-bgMain focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            href={`/${shopName}/signin`}
          >
            Login / Register
          </Link>
        </>
      )}
    </>
  );
}

export default DashboardMenu;
