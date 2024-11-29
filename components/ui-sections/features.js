import Image from "next/image";
import Coin from "../../public/coin.png";
import Money from "../../public/money.png";
import Exchange from "../../public/exchange.png";
import { useEffect, useState } from "react";
import axios from "axios";

function Features() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [userData, setUserData] = useState(null);
  const [userLoading, setUserLoading] = useState(true);
  const [userError, setUserError] = useState(null);
  const showSection = () => setShowPopUp(true);
  const hideSection = () => setShowPopUp(false);
  const logInCustomer = localStorage.getItem("customerData");
  const logInCustomerData = JSON.parse(logInCustomer);
  const logInCustomerLoyalty = logInCustomerData.loyalty;
  const logInCustomerID = logInCustomerData.customer_id;
  const logInCustomerEmail = logInCustomerData.email;
  const logInCustomerShopID = logInCustomerData.customer_shop_id;
  const available_points = logInCustomerLoyalty?.available_points.toFixed(2);
  const available_amount = logInCustomerLoyalty?.available_amount.toFixed(2);

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://sendio.online/rest-api/customer",
          {
            params: {
              filter_by: `[email=${logInCustomerEmail}]`, // Dynamically insert email here
              per_page: 1,
            },
            headers: {
              shop_id: 42,
              Authorization:
                "OXU0c0JkY3AyNU1acmFqRTM3U1kxeGx2azpCNFJ6VWRIcnB4RXVxVFdPUUdKWFBudEw4",
            },
          }
        );
        setUserData(response.data.data.loyalty);
      } catch (err) {
        setUserError(err.message);
      } finally {
        setUserLoading(false);
      }
    };

    fetchData();
  }, [logInCustomerEmail]);
  console.log(userData);

  const handlePointSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    try {
      const regStatus = await axios.post(
        "https://bestloyaltysolution.com/api/SubtractPoints",
        {
          customer_id: logInCustomerID,
          reduce_points: available_points,
          customer_shop_id: 42,
          POS_order_id: 4053,
        },
        {
          headers: {
            Authorization:
              "Bearer OXU0c0JkY3AyNU1acmFqRTM3U1kxeGx2azpCNFJ6VWRIcnB4RXVxVFdPUUdKWFBudEw4",
          },
        }
      );
      setShowPopUp(false);
      // return regStatus.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="features-area mx-auto max-w-4xl p-4 pt-20">
      <div className="all-features grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8">
        <div className="feature w-full bg-white p-8 py-12 rounded-lg flex flex-col items-center shadow-2xl relative">
          <div className="feature-image absolute top-[-30px] left-[30px] p-2 bg-bgSecondary border-8 rounded-lg border-bgMain">
            <Image height={45} src={Coin} alt="coin image" />
          </div>
          <div className="feature-text mt-3 text-center">
            <h2>{userData?.available_points.toFixed(2)}</h2>
            <h2>Points Available</h2>
          </div>
        </div>
        <div className="feature w-full bg-white p-8 py-12 rounded-lg flex flex-col items-center shadow-2xl relative">
          <div className="feature-image absolute top-[-30px] left-[30px] p-2 bg-bgSecondary border-8 rounded-lg border-bgMain">
            <Image height={45} src={Money} alt="coin image" />
          </div>
          <div className="feature-text mt-3 text-center">
            <h2>{userData?.available_amount.toFixed(2)}</h2>
            <h2>Amount Available</h2>
          </div>
        </div>
        <div
          onClick={showSection}
          className="feature w-full bg-bgSecondary text-cyan-50 p-8 py-12 rounded-lg flex items-center justify-center shadow-2xl cursor-pointer relative"
        >
          <div className="feature-image absolute top-[-30px] left-[30px] p-2 bg-bgSecondary border-8 rounded-lg border-bgMain">
            <Image height={45} src={Exchange} alt="coin image" />
          </div>
          <div className="feature-text mt-3 text-center">
            <h2 className="text-2xl">Redeem</h2>
          </div>
        </div>
      </div>

      {showPopUp && (
        <div
          id="popup-modal"
          tabindex="-1"
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
                <div className="features flex gap-4">
                  <div className="feature w-full bg-white p-4 rounded-lg flex flex-col items-center shadow-2xl my-8">
                    <div className="feature-image">
                      <Image height={45} src={Coin} alt="coin image" />
                    </div>
                    <div className="feature-text mt-3 text-center">
                      <h2>{userData?.available_points.toFixed(2)}</h2>
                      <h2>Loyalty Points</h2>
                    </div>
                  </div>
                  <div className="feature w-full bg-white p-4 rounded-lg flex flex-col items-center shadow-2xl my-8">
                    <div className="feature-image">
                      <Image height={45} src={Money} alt="coin image" />
                    </div>
                    <div className="feature-text mt-3 text-center">
                      <h2>{userData?.available_amount.toFixed(2)}</h2>
                      <h2>Amount Available</h2>
                    </div>
                  </div>
                </div>
                <div className="feature-form">
                  <h2>Use points to pay</h2>
                  <form
                    onSubmit={handlePointSubmit}
                    className="max-w-sm mx-auto"
                  >
                    <div className="my-4">
                      <input
                        type="text"
                        id="points"
                        className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-3xl focus:ring-bgMain focus:border-bgMain block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-bgMain dark:focus:border-bgMain"
                        placeholder="Enter Amount  to pay with points"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="rounded-3xl bg-bgMain dark:bg-bgSecondary px-12 py-2.5 text-sm font-semibold text-white dark:text-white shadow-sm hover:bg-gray-900 dark:hover:bg-bgMain focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      Use points
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Features;
