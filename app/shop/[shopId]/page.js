import Banner from "@/components/ui-sections/banner";

export default async function SingleShop({ params }) {
  const { shopId } = await params;
  console.log(shopId);
  let data = await fetch(
    `https://retransformx.online/rest-api/shop/${shopId}`,
    {
      headers: {
        shop_id: "42",
        Authorization:
          "OXU0c0JkY3AyNU1acmFqRTM3U1kxeGx2azpCNFJ6VWRIcnB4RXVxVFdPUUdKWFBudEw4",
      },
    }
  );
  const shopData = await data.json();
  const singleShopData = shopData.data;
  console.log(singleShopData);
  return (
    <Banner
      bgImage={singleShopData.banner}
      heading={singleShopData.company_name}
      text={`Experience delightful flavors, warm ambiance, and exceptional service at our ${singleShopData.company_name}. Savor every bite in a cozy setting!`}
      buttonLink={`/shop/${singleShopData.company_id}/add-customer`}
      buttonText="Add Customer"
    />
  );
}
