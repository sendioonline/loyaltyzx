import { getShopData, getShopId } from "@/app/api/api";
import UserHeader from "@/components/userHeader";
import Banner from "@/components/ui-sections/banner";
import GettingStarted from "@/components/ui-sections/gettingStarted";
import ShopOffers from "@/components/ui-sections/shopOffers";
import SignupBanner from "@/components/ui-sections/signupBanner";

export default async function SingleShop({ params }) {
  const { shopName } = await params;
  const shopID = await getShopId(shopName.toLowerCase());
  const shopData = await getShopData(shopID);
  const singleShopData = shopData.data;
  return (
    <>
      <UserHeader shopName={shopName.toLowerCase()} />
      <Banner
        bgImage={singleShopData.banner}
        heading={singleShopData.company_name}
        text={`Experience delightful flavors, warm ambiance, and exceptional service at our ${singleShopData.company_name}. Savor every bite in a cozy setting!`}
        buttonLink={`/${shopName}/account`}
        buttonText="Become A Member"
      />
      <GettingStarted />
      <ShopOffers bgImage={singleShopData.banner} />
      <SignupBanner shopName={shopName.toLowerCase()} />
    </>
  );
}
