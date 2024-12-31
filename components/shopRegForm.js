"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

function ShopRegisterForm() {
  const router = useRouter();
  const [errorReg, setErrorReg] = useState(""); // State to store API error message
  const [isErrorLoading, setIsErrorLoading] = useState(false); // State for button loading
  const [regFormData, setRegFormData] = useState({
    restaurantName: "",
    yourName: "",
    phone: "",
    email: "",
    city: "",
  });

  const handleRegChange = (e) => {
    const { name, value } = e.target;
    setRegFormData({
      ...regFormData,
      [name]: value,
    });
  };

  const handleSubmitREG = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    setErrorReg(""); // Reset error message
    setIsErrorLoading(true); // Show loading state

    try {
      const regStatus = await axios.post(
        "https://retransformx.online/rest-api/shop/",
        {
          company_name: regFormData.restaurantName,
          phone: regFormData.phone,
          email: regFormData.email,
          user_name: regFormData.yourName,
          uname: "",
          password: "",
          organization: "",
          system: "Loyaltyzx",
          business_type: "1",
          website: "https://sendio.online",
          address: "",
          street: "",
          postal_code: "",
          isActive: 0,
          business_service: 9,
        },
        {
          headers: {
            Authorization:
              "OXU0c0JkY3AyNU1acmFqRTM3U1kxeGx2azpCNFJ6VWRIcnB4RXVxVFdPUUdKWFBudEw4",
          },
        }
      );
      toast.success("Registration successful!");
      router.push("/");
    } catch (error) {
      setErrorReg(error.message);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmitREG}
        className="w-full max-w-[500px] mx-auto py-8"
      >
        <h2 className="mb-6 text-3xl font-semibold">Register your business</h2>
        <div className="grid md:grid-cols-1 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="restaurantName"
              id="restaurantName"
              value={regFormData.restaurantName}
              onChange={handleRegChange}
              className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-bgMain focus:outline-none focus:ring-0 focus:border-bgMain peer"
              placeholder=" "
            />
            <label
              htmlFor="restaurantName"
              className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-bgMain peer-focus:dark:text-bgMain peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Restaurant Name
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-1 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="yourName"
              id="yourName"
              value={regFormData.yourName}
              onChange={handleRegChange}
              className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-bgMain focus:outline-none focus:ring-0 focus:border-bgMain peer"
              placeholder=" "
            />
            <label
              htmlFor="yourName"
              className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-bgMain peer-focus:dark:text-bgMain peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your Name
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-1 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              name="phone"
              id="phone"
              value={regFormData.phone}
              onChange={handleRegChange}
              className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-bgMain focus:outline-none focus:ring-0 focus:border-bgMain peer"
              placeholder=""
              required
            />
            <label
              htmlFor="phone"
              className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-bgMain peer-focus:dark:text-bgMain peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone (e.g. +47 11 00 00 11)
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-1 md:gap-6">
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
              Email Address
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-1 md:gap-6">
          <div className="relative z-0 w-full mb-3 group">
            <input
              type="text"
              name="city"
              id="city"
              value={regFormData.city}
              onChange={handleRegChange}
              className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-bgMain focus:outline-none focus:ring-0 focus:border-bgMain peer"
              placeholder=" "
            />
            <label
              htmlFor="city"
              className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-bgMain peer-focus:dark:text-bgMain peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Restaurant City
            </label>
          </div>
        </div>
        {errorReg && <p className="text-red-500 text-sm mb-4">{errorReg}</p>}
        <button
          type="submit"
          disabled={isErrorLoading}
          className={`text-white mt-4 bg-bgMain hover:bg-bgSecondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-10 py-3 text-center dark:bg-gray-700 dark:hover:bg-bgSecondary dark:focus:ring-blue-800 ${
            isErrorLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isErrorLoading ? "Registering..." : "Register Now"}
        </button>
      </form>
    </>
  );
}

export default ShopRegisterForm;
