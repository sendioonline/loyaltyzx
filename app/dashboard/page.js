"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Features from "@/components/ui-sections/features";
import Tables from "@/components/ui-sections/tables";
import LogOut from "@/components/logOut";
import HeaderTop from "@/components/headerTop";

const ProtectedPage = () => {
  const shopData = localStorage.getItem("shopData");
  const shopDataMain = JSON.parse(shopData);
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check localStorage
    const customerData = localStorage.getItem("customerData");
    const customerObject = JSON.parse(customerData);
    const customerEmail = customerObject?.email;
    const customerName = customerObject?.name;

    if (customerEmail && customerName) {
      // User is authenticated
      setIsAuthenticated(true);
    } else {
      // Redirect to login page
      router.push("/login");
    }
  }, [router]);

  if (!isAuthenticated) {
    return <p className="text-center p-12">Redirecting to login...</p>;
  }

  return (
    <>
      <HeaderTop company={shopDataMain.company_name} />
      <Features />
      <Tables />
      <LogOut />
    </>
  );
};

export default ProtectedPage;
