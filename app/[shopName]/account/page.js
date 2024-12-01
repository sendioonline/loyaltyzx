import { getShopData, getShopId } from "@/app/api/api";
import UserLoginReg from "@/components/ui-sections/userLoginReg";
import UserHeader from "@/components/userHeader";

async function Account({ params }) {
  const { shopName } = await params;
  const shopID = await getShopId(shopName.toLowerCase());
  const shopData = await getShopData(shopID);
  const singleShopData = shopData.data;
  return (
    <>
      <UserHeader shopName={shopName.toLowerCase()} />
      <UserLoginReg bgImage={singleShopData.banner} />
    </>
  );
}

export default Account;
