"use client";
import Link from "next/link";
import RightArrow from "./ui-components/rightarrow";
import { useEffect, useState } from "react";

function ShopBannerButton({
  buttonLink,
  buttonText,
  buttonLinkTwo,
  buttonTextTwo,
}) {
  const [userStatus, setUserStatus] = useState(false);
  useEffect(() => {
    const userStatusValue = sessionStorage.getItem("userStatus");
    setUserStatus(userStatusValue);
  }, [userStatus]);

  return (
    <>
      {userStatus ? (
        <Link
          href={buttonLinkTwo}
          className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-bgMain hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
        >
          {buttonTextTwo}
          <RightArrow />
        </Link>
      ) : (
        <Link
          href={buttonLink}
          className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-bgMain hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
        >
          {buttonText}
          <RightArrow />
        </Link>
      )}
    </>
  );
}

export default ShopBannerButton;
