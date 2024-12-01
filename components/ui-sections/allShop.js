import Link from "next/link";
import HappyCustomer from "../../public/happy.jpg";

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
    <section className="features-area mx-auto max-w-7xl p-4 py-20">
      <div className="all-features grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5  gap-8">
        {allShopData.map((item) => (
          <Link
            key={item.company_id}
            href={`/${item.company_name.replace(/\s+/g, "-").toLowerCase()}`}
            target="_blank"
          >
            <div
              style={{
                backgroundImage: `url(${item.banner})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="offer w-full bg-white p-4 h-60 rounded-2xl flex flex-col justify-center items-center shadow-2xl relative z-2 cursor-pointer "
            >
              <div className="absolute top-0  left-0 right-0 bottom-0 bg-gradient-to-t from-black/50 to-black/0 rounded-2xl z-1"></div>
              <div className="offer-text text-center absolute z-2 bottom-10">
                <h2 className="text-white text-xl">{item.company_name}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
