"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Features from "@/components/features";
import UserHeader from "@/components/userHeader";
import DashboardOffers from "@/components/dashboardOffer";
import { getShopData } from "@/utils/apiUtils";
import ShopOffersTwo from "@/components/shopOfferTwo";

export default function SingleShop() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userShop, setUserShop] = useState("");
  const [shopData, setShopData] = useState("");
  const [customerData, setCustomerData] = useState("");

  useEffect(() => {
    const userShopValue = sessionStorage.getItem("userShop");
    const customerDataValue = sessionStorage.getItem("customerData");
    const shopIdValue = sessionStorage.getItem("shopID");
    const customerObjectValue = JSON.parse(customerDataValue);
    fetchShopData(shopIdValue);
    setUserShop(userShopValue);
    setCustomerData(customerObjectValue);
    const customerStatus = sessionStorage.getItem("userStatus");
    if (customerStatus === "true") {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      router.push(`/${userShopValue}/login`);
    }
  }, [router]);

  const fetchShopData = async (id) => {
    try {
      const shopData = await getShopData(id);
      setShopData(shopData.data);
    } catch (error) {
      console.error(error);
    }
  };

  const customerEmail = customerData?.email;
  const customerName = customerData?.name;
  const customerID = customerData?.user_id;
  const customerShopID = customerData?.shop_id || customerData?.parent_id;

  if (!isAuthenticated) {
    return <p className="text-center p-12">Redirecting to login...</p>;
  }

  return (
    <>
      {/* <UserHeader shopName={userShop} /> */}
      <Features
        customerName={customerName}
        userEmail={customerEmail}
        shopID={customerShopID}
        customerID={customerID}
        shopName={userShop}
      />
      <DashboardOffers shopData={shopData} />
    </>
  );
}
