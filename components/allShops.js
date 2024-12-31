import { fetchAllShopData } from "@/utils/apiUtils";
import Link from "next/link";

export default async function AllShops() {
  let allShop = await fetchAllShopData();
  let allShopData;
  if (allShop.status === "error") {
    allShopData = [];
  } else {
    allShopData = allShop.data;
  }
  return (
    <section className=" bg-bgMain/5 dark:bg-bgSecondary">
      <div className="features-area mx-auto max-w-7xl p-4 py-28">
        <h3 className="text-3xl font-semibold mb-10 tracking-tight text-stone-900">
          Find a restaurant
        </h3>
        <div className="all-features grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-12">
          {allShopData.map((item) => {
            const services = item.services;
            const hasLoyaltyService = services.some(
              (service) => service.service_name.toLowerCase() === "loyalty"
            );
            if (hasLoyaltyService) {
              return (
                <Link
                  key={item.company_id}
                  href={`/${item.company_name
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
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
                      <h2 className="text-white text-xl">
                        {item.company_name}
                      </h2>
                    </div>
                  </div>
                </Link>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}
