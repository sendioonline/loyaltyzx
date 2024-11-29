import AccountNew from "@/components/ui-sections/accountNew";

export default async function addCustomer({ params }) {
  const { singleShopName } = await params;
  console.log(singleShopName);
  return <AccountNew singleShopName={singleShopName} />;
}
