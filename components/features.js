"use client";
import Image from "next/image";
import Profile from "@/public/user-all.png";
import ExchangeIcon from "@/public/exchange-2.png";
import Coin from "@/public/coin.png";
import Money from "@/public/money.png";
import Exchange from "@/public/exchange.png";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import RightArrow from "./ui-components/rightarrow";
import { useRouter } from "next/navigation";
import DashboardMenu from "./dashboardMenu";

function Features({ customerName, userEmail, shopID, customerID, shopName }) {
  const [showPopUp, setShowPopUp] = useState(false);
  const [userData, setUserData] = useState(null);
  const [availablePoints, setAvailablePoints] = useState("");
  const [orderID, setorderID] = useState("");
  const [userTransaction, setUserTransaction] = useState(null);
  const showSection = () => setShowPopUp(true);
  const hideSection = () => setShowPopUp(false);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        "https://sendio.online/rest-api/customer",
        {
          params: {
            filter_by: `[email=${userEmail}]`,
            per_page: 1,
          },
          headers: {
            shop_id: shopID,
            Authorization:
              "OXU0c0JkY3AyNU1acmFqRTM3U1kxeGx2azpCNFJ6VWRIcnB4RXVxVFdPUUdKWFBudEw4",
          },
        }
      );
      setUserData(response.data.data.loyalty);
      setAvailablePoints(response.data.data.loyalty.available_points.toFixed());
    } catch (err) {
      console.log(err.message);
    }
  };

  const fetchUserTransaction = async () => {
    try {
      const response = await axios.post(
        "https://bestloyaltysolution.com/api/CustomerPointsLogs",
        {
          customer_id: customerID,
        },
        {
          headers: {
            Authorization:
              "Bearer OXU0c0JkY3AyNU1acmFqRTM3U1kxeGx2azpCNFJ6VWRIcnB4RXVxVFdPUUdKWFBudEw4",
          },
        }
      );
      setUserTransaction(response.data.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchUserData();
    fetchUserTransaction();
  }, []);

  const handlePointSubmit = async (e) => {
    e.preventDefault();
    try {
      const pointStatus = await axios.post(
        "https://bestloyaltysolution.com/api/SubtractPoints",
        {
          customer_id: customerID,
          reduce_points: availablePoints,
          customer_shop_id: shopID,
          POS_order_id: orderID,
        },
        {
          headers: {
            Authorization:
              "Bearer OXU0c0JkY3AyNU1acmFqRTM3U1kxeGx2azpCNFJ6VWRIcnB4RXVxVFdPUUdKWFBudEw4",
          },
        }
      );
      console.log("Response:", pointStatus.data);
      setAvailablePoints("");
      setShowPopUp(false);
      toast.success("Redeem Successfull!");
    } catch (error) {
      console.error("Error response:", error.response?.data || error.message);
    } finally {
      fetchUserData();
      fetchUserTransaction();
    }
  };

  const router = useRouter();
  const handelLogOut = () => {
    router.push(`/${userShop}/signin`);
    setShowMenu(!showMenu);
    sessionStorage.removeItem("customerData");
    sessionStorage.removeItem("shopID");
    sessionStorage.removeItem("userEmail");
    sessionStorage.removeItem("userShop");
    sessionStorage.removeItem("userStatus");
  };
  const handelToggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const handelDashBoard = () => {
    router.push(`/${userShop}/dashboard`);
    setShowMenu(!showMenu);
  };

  return (
    <>
      <section className="user-area p-8 pt-24">
        <div className="mx-auto max-w-7xl">
          <div className="user-data text-center">
            <div>
              <DashboardMenu shopName={shopName} />
            </div>
            {/* <div className="profile-image">
              <Image
                src={Profile}
                alt="Profile image"
                height={75}
                width={75}
                className="mb-4 mx-auto bg-bgMain p-1 rounded-full"
              />
            </div> */}
            <h2 className="text-2xl font-medium mb-1 tracking-tight text-stone-900">
              Hei, <span className="font-bold">{customerName}</span>
            </h2>
            <h2 className="text-xl font-normal tracking-tight text-stone-900">
              Your loyalty points:{" "}
              <span className="font-bold">
                {userData?.available_points.toFixed()}
              </span>{" "}
              <span className="font-bold text-zinc-500">
                (kr{" "}
                {userData?.available_amount
                  ? userData?.available_amount.toFixed(1)
                  : 0}
                )
              </span>
            </h2>
            {userData?.available_points.toFixed() > 1 ? (
              <button
                onClick={showSection}
                className="inline-flex items-center justify-center px-6 py-3 mt-6 text-base font-medium text-center text-white rounded-lg bg-bgMain hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Redeem
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <RightArrow />
                </svg>
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
        {showPopUp && (
          <div
            id="popup-modal"
            className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 z-50 flex justify-center items-center bg-black/80"
          >
            <div className="p-4 w-full max-w-2xl max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 p-8">
                <button
                  onClick={hideSection}
                  type="button"
                  className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="popup-modal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="p-4 md:p-5 text-center">
                  <div className="feature-form">
                    <Image
                      src={ExchangeIcon}
                      alt="Profile image"
                      height={50}
                      width={50}
                      className="mb-2 mx-auto"
                    />
                    <h2 className="text-xl font-medium mb-1 tracking-tight text-stone-900">
                      Hei, <span className="font-bold">{customerName}</span>
                    </h2>
                    <h2 className="text-md mb-6 font-medium tracking-tight text-stone-900">
                      Use loyalty points to pay{" "}
                      <span className="text-zinc-500">
                        ({userData?.available_points.toFixed()} available)
                      </span>
                    </h2>
                    <form
                      onSubmit={handlePointSubmit}
                      className="max-w-sm mx-auto"
                    >
                      <div className="my-3">
                        <input
                          type="number"
                          min="1"
                          max={userData?.available_points.toFixed()}
                          id="points"
                          onChange={(e) => setAvailablePoints(e.target.value)}
                          value={availablePoints}
                          className="bg-gray-50 border border-gray-300 text-gray-600 text-md rounded-3xl focus:ring-bgMain focus:border-bgMain block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-bgMain dark:focus:border-bgMain"
                          placeholder="Enter loyalty points amount"
                          required
                        />
                        <div className="text-left text-sm p-1.5 text-zinc-500">
                          {availablePoints} points = kr.{" "}
                          {availablePoints /
                            (userData?.available_points /
                              userData?.available_amount)}
                        </div>
                      </div>
                      <div className="my-3">
                        <input
                          type="text"
                          id="orderid"
                          onChange={(e) => setorderID(e.target.value)}
                          className="bg-gray-50 border mb-6 border-gray-300 text-gray-600 text-md rounded-3xl focus:ring-bgMain focus:border-bgMain block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-bgMain dark:focus:border-bgMain"
                          placeholder="Order ID"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="rounded-3xl bg-bgMain dark:bg-bgSecondary px-12 py-3 text-md font-semibold text-white dark:text-white shadow-sm hover:bg-gray-900 dark:hover:bg-bgMain focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        Use Points
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      <section className="features-area px-8 py-4">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-x-auto rounded-lg shadow-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-slate-50 bg-bgMain dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-2 md:px-6 md:py-4">
                    Activity
                  </th>
                  <th scope="col" className="px-4 py-2 md:px-6 md:py-4">
                    Date/Time
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-2 md:px-6 md:py-4 hidden md:block"
                  >
                    OrderID
                  </th>
                  <th scope="col" className="px-4 py-2 md:px-6 md:py-4">
                    Points
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-2 md:px-6 md:py-4 hidden md:block"
                  >
                    Channel
                  </th>
                </tr>
              </thead>
              <tbody>
                {userTransaction?.length > 0 ? (
                  userTransaction
                    ?.slice()
                    .reverse()
                    .map((item) => (
                      <tr
                        key={item.point_logs_id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      >
                        <td className="px-4 py-2 md:px-6 md:py-4">
                          {item.action_type.toUpperCase()}
                        </td>
                        <td className="px-4 py-2 md:px-6 md:py-4">
                          {item.timestamp.split("T")[0]}
                        </td>
                        <td className="px-4 py-2 md:px-6 md:py-4 hidden md:block">
                          #{item.POS_order_id}
                        </td>
                        <td className="px-4 py-2 md:px-6 md:py-4">
                          {item.action_type === "sub" ? "-" : "+"}
                          {item.used_points}
                        </td>
                        <td className="px-4 py-2 md:px-6 md:py-4 hidden md:block">
                          {item.userfor}
                        </td>
                      </tr>
                    ))
                ) : (
                  <tr>
                    <td className="text-center py-4">No activity available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
