import VerificationBanner from "@/components/verificationBanner";
import VerificationHeader from "@/components/verificationHeader";
import userImage from "@/public/user-image.jpg";
import { getShopID } from "@/utils/apiUtils";

async function VerificationUser({ params }) {
  const { shopName, userID } = await params;
  const shopID = await getShopID(shopName.toLowerCase());
  return (
    <div>
      <VerificationHeader shopName={shopName} />
      <VerificationBanner
        bgImage={userImage}
        shopName={shopName}
        userID={userID}
        shopID={shopID}
      />
    </div>
  );
}

export default VerificationUser;
