"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

function ShopDemoForm() {
  const router = useRouter();
  const [errorReg, setErrorReg] = useState(""); // State to store API error message
  const [isErrorLoading, setIsErrorLoading] = useState(false); // State for button loading
  const [demoFormData, setDemoFormData] = useState({
    restaurantName: "",
    yourName: "",
    phone: "",
    email: "",
  });

  const handleDemoChange = (e) => {
    const { name, value } = e.target;
    setDemoFormData({
      ...demoFormData,
      [name]: value,
    });
  };

  const handleSubmitDemo = async (e) => {
    e.preventDefault();
    setErrorReg("");
    setIsErrorLoading(true);

    try {
      const demoStatus = await axios.post(
        "https://retransformx.online/rest-api/lead/",
        {
          company_name: demoFormData.restaurantName,
          phone: demoFormData.phone,
          email: demoFormData.email,
          user_name: demoFormData.yourName,
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
      if (demoStatus.data.status === "success") {
        toast.success("Book a demo successful!");
        router.push("/");
      } else {
        setErrorReg("You already booked a demo, please try different Email.");
        setIsErrorLoading(false);
      }
    } catch (error) {
      setErrorReg(error.message);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmitDemo}
        className="w-full max-w-[500px] mx-auto py-8"
      >
        <h2 className="mb-6 text-4xl font-semibold">Book a demo</h2>
        <div className="grid md:grid-cols-1 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="restaurantName"
              id="restaurantName"
              value={demoFormData.restaurantName}
              onChange={handleDemoChange}
              className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-bgMain focus:outline-none focus:ring-0 focus:border-bgMain peer"
              placeholder=" "
            />
            <label
              htmlFor="restaurantName"
              className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-bgMain peer-focus:dark:text-bgMain peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Business Name
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-1 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="yourName"
              id="yourName"
              value={demoFormData.yourName}
              onChange={handleDemoChange}
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
              type="email"
              name="email"
              id="email"
              value={demoFormData.email}
              onChange={handleDemoChange}
              className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-bgMain focus:outline-none focus:ring-0 focus:border-bgMain peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-bgMain peer-focus:dark:text-bgMain peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Business Email
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-1 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              name="phone"
              id="phone"
              value={demoFormData.phone}
              onChange={handleDemoChange}
              className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-bgMain focus:outline-none focus:ring-0 focus:border-bgMain peer"
              placeholder=""
              required
            />
            <label
              htmlFor="phone"
              className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-bgMain peer-focus:dark:text-bgMain peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone (e.g. +4711000011)
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
          {isErrorLoading ? "Booking..." : "Book Now"}
        </button>
      </form>
    </>
  );
}

export default ShopDemoForm;
