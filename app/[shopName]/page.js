import { getShopData, getShopID } from "@/utils/apiUtils";
import ShopBanner from "@/components/shopBanner";
import ShopOffers from "@/components/shopOffer";
import SignupBanner from "@/components/signUpBanner";
import ShopNotFound from "@/components/shopNotFound";
import UserHeader from "@/components/userHeader";
import ShopSteps from "@/components/shopSteps";
import ShopFooter from "@/components/shopFooter";
import ShopAbout from "@/components/shopAbout";
import DashboardOffers from "@/components/dashboardOffer";
import ShopOffersTwo from "@/components/shopOfferTwo";

export default async function SingleShop({ params }) {
  const { shopName } = await params;
  const shopID = await getShopID(shopName.toLowerCase());
  const shopData = await getShopData(shopID);
  let singleShopData;
  if (shopData !== undefined) {
    singleShopData = shopData.data;
  }
  return (
    <>
      {shopData !== undefined ? (
        <>
          <UserHeader shopName={shopName.toLowerCase()} />
          <ShopBanner
            bgImage={singleShopData.banner}
            heading={singleShopData.company_name}
            mainHeading={singleShopData.loyaltyVerification_system_text}
            text={singleShopData.loyaltyVerification_system_description}
            buttonLink={`/${shopName}/signup`}
            buttonLinkTwo={`/${shopName}/dashboard`}
            buttonText="Become A Member"
            buttonTextTwo="Dashboard"
          />
          <ShopOffersTwo shopData={singleShopData} />
          <ShopAbout />
          <ShopSteps />
          <SignupBanner
            shopName={shopName.toLowerCase()}
            bgImage={singleShopData.banner}
            buttonLink={`/${shopName}/signup`}
            buttonLinkTwo={`/${shopName}/dashboard`}
            buttonText="Become A Member"
            buttonTextTwo="Dashboard"
          />
          <ShopFooter singleShopData={singleShopData} />
        </>
      ) : (
        <>
          <ShopNotFound />
        </>
      )}
    </>
  );
}
