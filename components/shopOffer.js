import Link from "next/link";
function ShopOffers({ shopData }) {
  return (
    <section className="offers-area py-32 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h3 className="text-3xl font-semibold mb-2 tracking-tight text-stone-900 text-center">
            Access Exclusive Offers Using Rewards
          </h3>
          <p className="text-center mb-10">
            Enjoy special promotions and deals from the restaurant
          </p>
        </div>
        <div className="all-offers grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <Link href={shopData.meta?.menuurl ? shopData.meta.menuurl : "#"}>
            <div
              style={{
                backgroundImage: `url(${shopData.banner})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="offer w-full bg-white p-4 h-28 rounded-2xl flex flex-col justify-center items-center shadow-2xl relative z-2 cursor-pointer "
            >
              <div className="absolute top-0  left-0 right-0 bottom-0 bg-gradient-to-t from-black/80 to-black/0 rounded-2xl z-1"></div>
              <div className="offer-text text-center absolute z-2 bottom-4">
                <h2 className="text-white text-xl">Food Menu</h2>
              </div>
            </div>
          </Link>
          <Link href={"#"}>
            <div
              style={{
                backgroundImage: `url(${shopData.banner})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="offer w-full bg-white p-4 h-28 rounded-2xl flex flex-col justify-center items-center shadow-2xl relative z-2 cursor-pointer "
            >
              <div className="absolute top-0  left-0 right-0 bottom-0 bg-gradient-to-t from-black/80 to-black/0 rounded-2xl z-1"></div>
              <div className="offer-text text-center absolute z-2 bottom-4">
                <h2 className=" text-white text-xl">Takeaway</h2>
              </div>
            </div>
          </Link>
          <Link
            target="_blank"
            href={shopData?.booking_url?.en ? shopData?.booking_url?.en : "#"}
          >
            <div
              style={{
                backgroundImage: `url(${shopData.banner})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="offer w-full bg-white p-4 h-28 rounded-2xl flex flex-col justify-center items-center shadow-2xl relative z-2 cursor-pointer "
            >
              <div className="absolute top-0  left-0 right-0 bottom-0 bg-gradient-to-t from-black/80 to-black/0 rounded-2xl z-1"></div>
              <div className="offer-text text-center absolute z-2 bottom-4">
                <h2 className=" text-white text-xl">Booking Table</h2>
              </div>
            </div>
          </Link>
          <Link
            target="_blank"
            href={shopData?.copybooklinkGift ? shopData?.copybooklinkGift : "#"}
          >
            <div
              style={{
                backgroundImage: `url(${shopData.banner})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="offer w-full bg-white p-4 h-28 rounded-2xl flex flex-col justify-center items-center shadow-2xl relative z-2 cursor-pointer "
            >
              <div className="absolute top-0  left-0 right-0 bottom-0 bg-gradient-to-t from-black/80 to-black/0 rounded-2xl z-1"></div>
              <div className="offer-text text-center absolute z-2 bottom-4">
                <h2 className=" text-white text-xl">Gift Card</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ShopOffers;
