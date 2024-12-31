import AccountBanner from "@/components/accountBanner";
import ShopHeader from "@/components/shopHeader";
import UserHeader from "@/components/userHeader";
import { getShopData, getShopID } from "@/utils/apiUtils";

async function SignIn({ params }) {
  const { shopName } = await params;
  const shopID = await getShopID(shopName.toLowerCase());
  const shopData = await getShopData(shopID);
  const singleShopData = shopData.data;
  return (
    <>
      <UserHeader shopName={shopName.toLowerCase()} />
      <AccountBanner
        buttonText="Sign In Using OTP"
        bgImage={singleShopData.banner}
        shopID={shopID}
        shopName={shopName.toLowerCase()}
      />
    </>
  );
}

export default SignIn;
