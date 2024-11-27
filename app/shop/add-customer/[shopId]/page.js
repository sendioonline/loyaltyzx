import AccountNew from "@/components/ui-sections/accountNew";

export default async function addCustomer({ params }) {
  const { shopId } = await params;
  console.log(shopId);
  return <AccountNew />;
}
