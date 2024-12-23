import { getShopData, getShopId } from "@/app/api/api";
import Header from "@/components/userHeader";
import Banner from "@/components/ui-sections/banner";

export default async function SingleShop({ params }) {
  const { shopName } = await params;
  const shopID = await getShopId(shopName.toLowerCase());
  const shopData = await getShopData(shopID);
  const singleShopData = shopData.data;
  return (
    <>
      <Header shopName={shopName.toLowerCase()} />
      <Banner
        bgImage={singleShopData.banner}
        heading={singleShopData.company_name}
        text={`Experience delightful flavors, warm ambiance, and exceptional service at our ${singleShopData.company_name}. Savor every bite in a cozy setting!`}
        buttonLink={`/shop/add-customer/${shopName}/`}
        buttonText="Add Customer"
      />
    </>
  );
}
