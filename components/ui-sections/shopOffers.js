import HappyCustomer from "../../public/happy.jpg";
async function ShopOffers({ bgImage }) {
  return (
    <section className="offers-area mx-auto max-w-7xl py-20 p-4">
      <div className="mb-8">
        <h3 className="text-2xl mb-2">
          Treat yourself to an award-winning meal
        </h3>
        <p>2024’s Travelers’ Choice Awards Best of the Best Restaurants</p>
      </div>
      <div className="all-offers grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="offer w-full bg-white p-4 h-60 rounded-2xl flex flex-col justify-center items-center shadow-2xl relative z-2 cursor-pointer "
        >
          <div className="absolute top-0  left-0 right-0 bottom-0 bg-gradient-to-t from-black/50 to-black/0 rounded-2xl z-1"></div>
          <div className="offer-text text-center absolute z-2 bottom-10">
            <h2 className="text-white text-xl">Fine Dining</h2>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${HappyCustomer.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="offer w-full bg-white p-4 h-60 rounded-2xl flex flex-col justify-center items-center shadow-2xl relative z-2 cursor-pointer "
        >
          <div className="absolute top-0  left-0 right-0 bottom-0 bg-gradient-to-t from-black/50 to-black/0 rounded-2xl z-1"></div>
          <div className="offer-text text-center absolute z-2 bottom-10">
            <h2 className=" text-white text-xl">Date Night</h2>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="offer w-full bg-white p-4 h-60 rounded-2xl flex flex-col justify-center items-center shadow-2xl relative z-2 cursor-pointer "
        >
          <div className="absolute top-0  left-0 right-0 bottom-0 bg-gradient-to-t from-black/50 to-black/0 rounded-2xl z-1"></div>
          <div className="offer-text text-center absolute z-2 bottom-10">
            <h2 className=" text-white text-xl">Casual Dining</h2>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${HappyCustomer.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="offer w-full bg-white p-4 h-60 rounded-2xl flex flex-col justify-center items-center shadow-2xl relative z-2 cursor-pointer "
        >
          <div className="absolute top-0  left-0 right-0 bottom-0 bg-gradient-to-t from-black/50 to-black/0 rounded-2xl z-1"></div>
          <div className="offer-text text-center absolute z-2 bottom-10">
            <h2 className=" text-white text-xl">Hidden Gems</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopOffers;
