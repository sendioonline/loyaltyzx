import Link from "next/link";

export default async function AllShop() {
  let data = await fetch("https://sendio.online/rest-api/shop/", {
    headers: {
      shop_id: "42",
      Authorization:
        "OXU0c0JkY3AyNU1acmFqRTM3U1kxeGx2azpCNFJ6VWRIcnB4RXVxVFdPUUdKWFBudEw4",
    },
  });
  const shopDada = await data.json();
  const allShopData = shopDada.data;
  console.log(allShopData);
  return (
    <section className="features-area mx-auto max-w-7xl p-4 pb-20">
      <div className="all-features grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5  gap-8">
        {allShopData.map((item) => (
          <Link
            key={item.company_id}
            href={`/shop/${item.company_name.replace(/\s+/g, "-")}`}
          >
            <div
              // style={{
              //   backgroundImage: `url(${item.banner})`,
              //   backgroundSize: "cover",
              //   backgroundPosition: "center",
              // }}
              className="feature w-full h-36 bg-white p-8 rounded-lg flex flex-col justify-center items-center shadow-2xl relative cursor-pointer"
            >
              <div className="feature-text text-center">
                <h2>{item.company_name}</h2>
                {/* <h3>{item.address}</h3> */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
