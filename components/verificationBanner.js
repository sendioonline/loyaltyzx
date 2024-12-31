"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function VerificationBanner({ bgImage, shopName, userID, shopID }) {
  const userValue = userID.replace(/%3D+$/, "");
  const newUserID = atob(userValue);
  const [error, setError] = useState("");
  const [errorReg, setErrorReg] = useState("");
  const [regLoading, setRegLoading] = useState(false);
  const [regFormData, setRegFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    street: "",
    city: "",
    postcode: "",
    shop_id: shopID,
    notification: 1,
  });

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://sendio.online/rest-api/customer/${newUserID}`,
          {
            headers: {
              shop_id: "42",
              Authorization:
                "OXU0c0JkY3AyNU1acmFqRTM3U1kxeGx2azpCNFJ6VWRIcnB4RXVxVFdPUUdKWFBudEw4",
            },
          }
        );
        setRegFormData({
          ...regFormData,
          name: response.data.data.name,
          email: response.data.data.email,
          phone: response.data.data.phone,
          address: response.data.data.address[0]?.address,
          street: response.data.data.address[0]?.street,
          city: response.data.data.address[0]?.city,
          postcode: response.data.data.address[0]?.postcode,
        });
      } catch (err) {
        setError(err.message || "An error occurred");
      } finally {
        setRegLoading(false);
      }
    };

    fetchData();
  }, [newUserID]);

  const handleRegChange = (e) => {
    const { name, value } = e.target;
    setRegFormData({
      ...regFormData,
      [name]: value,
    });
  };

  const handleSubmitREG = async (e) => {
    e.preventDefault();
    setErrorReg("");
    setRegLoading(true);

    try {
      const regStatus = await axios.post(
        "https://bestloyaltysolution.com/api/AddCustomer_Pos_Loyalty",
        {
          phone: regFormData.phone,
          name: regFormData.name,
          email: regFormData.email,
          address: regFormData.address,
          street: regFormData.street,
          city: regFormData.city,
          postcode: regFormData.postcode,
          shop_id: shopID,
          notification: 1,
        },
        {
          headers: {
            Authorization:
              "Bearer OXU0c0JkY3AyNU1acmFqRTM3U1kxeGx2azpCNFJ6VWRIcnB4RXVxVFdPUUdKWFBudEw4",
          },
        }
      );
      toast.success("Registration successful!");
      const customerNewID = regStatus.data.data[0].customer_id;
      sessionStorage.setItem(
        "customerData",
        JSON.stringify({ ...regFormData, user_id: customerNewID })
      );
      sessionStorage.setItem("userShop", shopName);
      sessionStorage.setItem("userEmail", regFormData.email);
      sessionStorage.setItem("shopID", shopID);
      sessionStorage.setItem("userStatus", true);
      router.push(`/${shopName}/dashboard`);
    } catch (error) {
      setErrorReg(error.message);
    }
  };

  return (
    <section className="grid grid-flow-col grid-rows-2 sm:grid-rows-2 sm:grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-4 p-4 md:p-0">
      <div
        style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
        className="w-full object-cover h-72 lg:w-full md:h-[calc(100vh-144px)] bg-cover bg-center rounded-[20px] md:rounded-r-[40px] md:rounded-l-[0]"
      ></div>
      <div className="flex items-center justify-center">
        <form
          onSubmit={handleSubmitREG}
          className="w-full max-w-[450px] mx-auto  py-8"
        >
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="name"
              id="name"
              value={regFormData.name}
              onChange={handleRegChange}
              className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-bgMain focus:outline-none focus:ring-0 focus:border-bgMain peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-bgMain peer-focus:dark:text-bgMain peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Full Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="email"
              id="email"
              value={regFormData.email}
              onChange={handleRegChange}
              className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-bgMain focus:outline-none focus:ring-0 focus:border-bgMain peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-bgMain peer-focus:dark:text-bgMain peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              name="phone"
              id="phone"
              value={regFormData.phone}
              onChange={handleRegChange}
              className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-bgMain focus:outline-none focus:ring-0 focus:border-bgMain peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="phone"
              className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-bgMain peer-focus:dark:text-bgMain peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone Number
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="address"
              id="address"
              value={regFormData.address}
              onChange={handleRegChange}
              className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-bgMain focus:outline-none focus:ring-0 focus:border-bgMain peer"
              placeholder=" "
            />
            <label
              htmlFor="address"
              className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-bgMain peer-focus:dark:text-bgMain peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Address
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="street"
              id="street"
              value={regFormData.street}
              onChange={handleRegChange}
              className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-bgMain focus:outline-none focus:ring-0 focus:border-bgMain peer"
              placeholder=" "
            />
            <label
              htmlFor="street"
              className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-bgMain peer-focus:dark:text-bgMain peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Street
            </label>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="city"
                id="city"
                value={regFormData.city}
                onChange={handleRegChange}
                className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-bgMain focus:outline-none focus:ring-0 focus:border-bgMain peer"
                placeholder=" "
              />
              <label
                htmlFor="city"
                className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-bgMain peer-focus:dark:text-bgMain peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                City
              </label>
            </div>
            <div className="relative z-0 w-full mb-8 group">
              <input
                type="text"
                name="postcode"
                id="postcode"
                value={regFormData.postcode}
                onChange={handleRegChange}
                className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-bgMain focus:outline-none focus:ring-0 focus:border-bgMain peer"
                placeholder=" "
              />
              <label
                htmlFor="postcode"
                className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-bgMain peer-focus:dark:text-bgMain peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Postcode
              </label>
            </div>
          </div>
          <div className="flex items-start w-full mb-8">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-bgMain dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-bgMain dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label
              htmlFor="terms"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree with the{" "}
              <a
                href="#"
                className="text-bgMain hover:underline dark:text-bgMain"
              >
                terms and conditions
              </a>
            </label>
          </div>

          <button
            type="submit"
            disabled={regLoading}
            className={`text-white bg-bgMain hover:bg-bgSecondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 text-center dark:bg-gray-700 dark:hover:bg-bgSecondary dark:focus:ring-blue-800 ${
              regLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {regLoading ? "Registering..." : "Register Now"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default VerificationBanner;
