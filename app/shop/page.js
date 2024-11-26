"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import axios from "axios";
import HeaderTop from "@/components/headerTop";
import Hero from "@/components/ui-sections/hero";
import { useEffect, useState } from "react";

function Shop() {
  const [shopData, SetShopData] = useState("");
  const pathname = usePathname(); // Get the pathname, e.g., "/shop"
  const searchParams = useSearchParams(); // Get the query parameters
  const router = useRouter();
  const shopIDS = {
    NDI: 42,
    NDc: 47,
    NzY: 76,
  };

  // Combine pathname and query string
  const userPath = `${pathname}?${searchParams.toString()}`;
  const [pathWithSlash, queryString] = userPath.split("?");
  const uPath = pathWithSlash.replace("/", "");
  const uShopPath = queryString.split("=")[1];

  // Find the IDS
  const shopIDNumber = shopIDS[uShopPath];
  console.log(shopIDNumber);
  if (shopIDNumber) {
    localStorage.setItem("shopID", shopIDNumber.toString());
  } else {
    localStorage.removeItem("shopID");
    router.push("/");
  }

  const handleShopData = async (e) => {
    try {
      const dataStatus = await axios.get(
        `https://retransformx.online/rest-api/shop/${shopIDNumber}`,
        {
          headers: {
            shop_id: 42,
            Authorization:
              "OXU0c0JkY3AyNU1acmFqRTM3U1kxeGx2azpCNFJ6VWRIcnB4RXVxVFdPUUdKWFBudEw4",
          },
        }
      );
      SetShopData(dataStatus.data.data);
      console.log(dataStatus.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    handleShopData(); // Fetch data when the component mounts
  }, []);
  return (
    <main>
      <HeaderTop company={shopData.company_name} />
      <Hero buttonLink="add-user" buttonText="Add User" />
    </main>
  );
}

export default Shop;
