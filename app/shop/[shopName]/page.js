import Banner from "@/components/ui-sections/banner";

export default async function SingleShop({ params }) {
  const { shopName } = await params;
  console.log(shopName);
  const shopIDS = {
    Pk: 77,
    "Tarka-As": 76,
    "Lille-Haveli-Heggedal": 52,
    Aura: 51,
    "Jewel-of-india": 50,
    "Masala-Library-by-HK": 49,
    AskerHaveli: 48,
    "1947-Gandhi": 47,
    Mistral: 46,
    "TukTuk--Thai-Diner-%26-Takeaway--Sandvika": 45,
    "TukTuk-Thai-Diner-And-Bar--Asker": 44,
    "Lille-Haveli-Asker": 43,
    "Examples-Restaurant": 42,
    "Desi-Indisk-KitchenAs": 21,
    Aahar: 5,
    "VIVAMART-AS": 1,
  };
  const shopID = shopIDS[shopName];
  console.log(shopID);
  let data = await fetch(`https://sendio.online/rest-api/shop/${shopID}`, {
    headers: {
      shop_id: "42",
      Authorization:
        "OXU0c0JkY3AyNU1acmFqRTM3U1kxeGx2azpCNFJ6VWRIcnB4RXVxVFdPUUdKWFBudEw4",
    },
  });
  const shopData = await data.json();
  const singleShopData = shopData.data;
  console.log(singleShopData);
  return (
    <Banner
      bgImage={singleShopData.banner}
      heading={singleShopData.company_name}
      text={`Experience delightful flavors, warm ambiance, and exceptional service at our ${singleShopData.company_name}. Savor every bite in a cozy setting!`}
      buttonLink={`/shop/add-customer/${shopName}/`}
      buttonText="Add Customer"
    />
  );
}
