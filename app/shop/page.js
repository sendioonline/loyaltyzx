"use client";
import axios from "axios";
import HeaderTop from "@/components/headerTop";
import Hero from "@/components/ui-sections/hero";
import { useEffect, useState } from "react";

function Shop() {
  const [shopData, SetShopData] = useState("");

  const handleShopData = async (e) => {
    const shopIDS = {
      NDI: 42,
      NDc: 47,
      NzY: 76,
    };
    const urlParams = new URLSearchParams(window.location.search);
    const sh = urlParams.get("sh"); // "NDI"
    const shopIDNumber = shopIDS[sh];
    console.log(shopIDNumber);
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
      localStorage.setItem("shopData", JSON.stringify(dataStatus.data.data));
    } catch (error) {
      localStorage.removeItem("shopData");
      console.log(error.message);
    }
  };
  useEffect(() => {
    handleShopData(); // Fetch data when the component mounts
  }, []);
  console.log(shopData);
  return (
    <main>
      <HeaderTop company={shopData.company_name} />
      <Hero buttonLink="login" buttonText="Add Customer" />
    </main>
  );
}

export default Shop;
