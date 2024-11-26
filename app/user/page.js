"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import Features from "@/components/ui-sections/features";
import Tables from "@/components/ui-sections/tables";

function User() {
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

  // Find the corresponding number from shopIDS
  const shopIDNumber = shopIDS[uShopPath];

  // Check if the key exists and then store it in localStorage
  if (shopIDNumber) {
    localStorage.setItem("shopID", shopIDNumber.toString()); // Save as a string in localStorage
    console.log(`Saved ${shopIDNumber} to localStorage with key 'shopID'`);
  } else {
    router.push("/login");
    console.error(`Invalid shop ID key: ${uShopPath}`);
  }

  return (
    <main>
      <Features />
      <Tables />
    </main>
  );
}

export default User;
