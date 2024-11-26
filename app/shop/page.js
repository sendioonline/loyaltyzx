"use client";
import axios from "axios";
import HeaderTop from "@/components/headerTop";
import Hero from "@/components/ui-sections/hero";
import { useEffect, useState } from "react";

function Shop() {
  const [shValue, setShValue] = useState("");
  const [shopData, SetShopData] = useState("");
  const shopIDS = {
    NDI: 42,
    NDc: 47,
    NzY: 76,
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = window.location.href;
      const urlParams = new URLSearchParams(window.location.search);
      const sh = urlParams.get("sh"); // "NDI"
      setShValue(sh);
    }
  }, []);

  const shopIDNumber = shopIDS[shValue];
  if (shopIDNumber) {
    localStorage.setItem("shopID", shopIDNumber.toString());
  } else {
    localStorage.removeItem("shopID");
    // router.push("/");
  }

  const handleShopData = async (e) => {
    try {
      const dataStatus = await axios.get(
        `https://retransformx.online/rest-api/shop/42`,
        {
          headers: {
            shop_id: 42,
            Authorization:
              "OXU0c0JkY3AyNU1acmFqRTM3U1kxeGx2azpCNFJ6VWRIcnB4RXVxVFdPUUdKWFBudEw4",
          },
        }
      );
      SetShopData(dataStatus.data.data);
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
