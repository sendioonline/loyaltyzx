import MenuImage from "@/public/menu-1.png";
import TakeawayImage from "@/public/takeaway-1.png";
import ReservationImage from "@/public/reservation.png";
import GiftcardImage from "@/public/giftcard.png";
import MenuIcon from "@/public/menu-icon.png";
import TakeawayIcon from "@/public/takeaway-icon.png";
import ReservationIcon from "@/public/reservan-icon.png";
import GiftcardIcon from "@/public/gift-icon.png";
import ReviewImage from "@/public/review-image.png";
import ReviewIcon from "@/public/review-icon.png";
import Image from "next/image";
import Link from "next/link";
function DashboardOffers({ shopData }) {
  const websiteURl = shopData?.website ? shopData?.website : "#";
  return (
    <section className="offers-area py-32 p-8">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-8">
          <h3 className="text-3xl font-semibold mb-2 tracking-tight text-stone-900 text-center">
            Explore Earn and Redeem
          </h3>
          <p className="text-center mb-10">
            Explore the multiple ways to Earn and Redeem points
          </p>
        </div>
        <div className="all-offers grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          <Link
            href={shopData.meta?.menuurl ? shopData.meta?.menuurl : websiteURl}
          >
            <div className="offer w-full bg-white p-4 rounded-2xl flex flex-col justify-center items-center shadow-2xl relative z-2 cursor-pointer ">
              <div>
                <Image
                  src={MenuImage}
                  width={750}
                  height={522}
                  className="w-full"
                  alt="Menu Image"
                />
              </div>
              <div className="offer-text text-center">
                <h2 className="text-zinc-900 text-xl font-semibold flex gap-2 mt-4 mb-3 items-center justify-center">
                  <Image
                    src={MenuIcon}
                    width={30}
                    height={30}
                    alt="Menu Image"
                  />
                  MENU
                </h2>
                <p className="font-normal text-stone-950 dark:text-gray-400 mb-2">
                  Look at our menu and discover a world of extraordinary flavors
                  crafted to delight you
                </p>
              </div>
            </div>
          </Link>
          <Link
            href={
              shopData?.meta?.takewaway_url
                ? shopData?.meta?.takewaway_url
                : websiteURl
            }
          >
            <div className="offer w-full bg-white p-4 rounded-2xl flex flex-col justify-center items-center shadow-2xl relative z-2 cursor-pointer ">
              <div>
                <Image
                  src={TakeawayImage}
                  width={750}
                  height={522}
                  className="w-full"
                  alt="Menu Image"
                />
              </div>
              <div className="offer-text text-center">
                <h2 className="text-zinc-900 text-xl font-semibold flex gap-2 mt-4 mb-3 items-center justify-center">
                  <Image
                    src={TakeawayIcon}
                    width={30}
                    height={30}
                    alt="Menu Image"
                  />
                  TAKEAWAY
                </h2>
                <p className="font-normal text-stone-950 dark:text-gray-400 mb-2">
                  Look at our takeaway menu and enjoy restaurant-quality
                  flavors, crafted fresh and ready to go!
                </p>
              </div>
            </div>
          </Link>
          <Link
            target="_blank"
            href={
              shopData?.booking_url?.en ? shopData?.booking_url?.en : websiteURl
            }
          >
            <div className="offer w-full bg-white p-4 rounded-2xl flex flex-col justify-center items-center shadow-2xl relative z-2 cursor-pointer ">
              <div>
                <Image
                  src={ReservationImage}
                  width={750}
                  height={522}
                  className="w-full"
                  alt="Menu Image"
                />
              </div>
              <div className="offer-text text-center">
                <h2 className="text-zinc-900 text-xl font-semibold flex gap-2 mt-4 mb-3 items-center justify-center">
                  <Image
                    src={ReservationIcon}
                    width={30}
                    height={30}
                    alt="Menu Image"
                  />
                  RESERVATION
                </h2>
                <p className="font-normal text-stone-950 dark:text-gray-400 mb-2">
                  Book your table now and ensure your spot for an exceptional
                  dining experience!
                </p>
              </div>
            </div>
          </Link>
          <Link
            target="_blank"
            href={
              shopData?.copybooklinkGift
                ? shopData?.copybooklinkGift
                : websiteURl
            }
          >
            <div className="offer w-full bg-white p-4 rounded-2xl flex flex-col justify-center items-center shadow-2xl relative z-2 cursor-pointer ">
              <div>
                <Image
                  src={GiftcardImage}
                  width={750}
                  height={522}
                  className="w-full"
                  alt="Menu Image"
                />
              </div>
              <div className="offer-text text-center">
                <h2 className="text-zinc-900 text-xl font-semibold flex gap-2 mt-4 mb-3 items-center justify-center">
                  <Image
                    src={GiftcardIcon}
                    width={30}
                    height={30}
                    alt="Menu Image"
                  />
                  GIFTCARDS
                </h2>
                <p className="font-normal text-stone-950 dark:text-gray-400 mb-2">
                  Give the gift of flavor! Purchase a gift card today and share
                  a delightful experience
                </p>
              </div>
            </div>
          </Link>
          <Link
            target="_blank"
            href={
              shopData?.copybooklinkGift
                ? shopData?.copybooklinkGift
                : websiteURl
            }
          >
            <div className="offer w-full bg-white p-4 rounded-2xl flex flex-col justify-center items-center shadow-2xl relative z-2 cursor-pointer ">
              <div>
                <Image
                  src={ReviewImage}
                  width={750}
                  height={522}
                  className="w-full"
                  alt="Menu Image"
                />
              </div>
              <div className="offer-text text-center">
                <h2 className="text-zinc-900 text-xl font-semibold flex gap-2 mt-4 mb-3 items-center justify-center">
                  <Image
                    src={ReviewIcon}
                    width={30}
                    height={30}
                    alt="Menu Image"
                  />
                  REVIEW
                </h2>
                <p className="font-normal text-stone-950 dark:text-gray-400 mb-2">
                  Share your thoughts! Leave a review today and help us craft
                  even better experiences for you.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default DashboardOffers;
