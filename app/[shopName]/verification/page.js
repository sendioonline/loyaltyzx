import ShopHeader from "@/components/shopHeader";

async function VerificationPage({ params }) {
  const { shopName } = await params;
  return (
    <div>
      <ShopHeader shopName={shopName} />
    </div>
  );
}

export default VerificationPage;
