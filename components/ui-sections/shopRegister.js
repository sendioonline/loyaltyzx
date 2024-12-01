"use client";
import { useState } from "react";
import userImage from "../../public/user-image.jpg";
import { useRouter } from "next/navigation";

function ShopRegister() {
  const router = useRouter();
  const [errorReg, setErrorReg] = useState(""); // State to store API error message
  const [isErrorLoading, setIsErrorLoading] = useState(false); // State for button loading
  const [regFormData, setRegFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    restaurantName: "",
    restaurantPhone: "",
    restaurantCity: "",
    restaurantState: "",
    restaurantZip: "",
    restaurantCountry: "",
    restaurantReason: "",
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
        "https://bestloyaltysolution.com/api/AddCustomer_Pos_Loyalty",
        {
          name: regFormData.name,
          email: regFormData.email,
          phone: regFormData.phone,
          address: regFormData.full_address,
          street: regFormData.street,
          city: regFormData.street,
          postcode: regFormData.postcode,
          shop_id: 42,
        },
        {
          headers: {
            Authorization:
              "Bearer OXU0c0JkY3AyNU1acmFqRTM3U1kxeGx2azpCNFJ6VWRIcnB4RXVxVFdPUUdKWFBudEw4",
          },
        }
      );
      console.log("Reg successfully:", regStatus.data);
      localStorage.setItem("customerData", JSON.stringify(regFormData));
      router.push("/dashboard");
      // return regStatus.data;
    } catch (error) {
      setErrorMessage(error.message); // Capture and set error
    }
  };

  return (
    <>
      <section className="grid grid-flow-col grid-rows-2 sm:grid-rows-2 sm:grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-4 p-4 md:p-0">
        <div
          style={{
            backgroundImage: `url(${userImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-full object-cover h-auto mb-6 md:mb-0 lg:w-full md:h-[calc(100vh-103px)] bg-cover bg-center rounded-[20px] md:rounded-r-[40px] md:rounded-l-[0]"
        ></div>
        <div className="flex items-center justify-center">
          <div className="customer-register w-full max-w-2xl">
            <h2 className="text-3xl mb-6">SIGN-UP NOW</h2>
            <form className="" onSubmit={handleSubmitREG}>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={regFormData.firstName}
                    onChange={handleRegChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-bgMain focus:outline-none focus:ring-0 focus:border-bgMain peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="firstName"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-bgMain peer-focus:dark:text-bgMain peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    First Name
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={regFormData.lastName}
                    onChange={handleRegChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-bgMain focus:outline-none focus:ring-0 focus:border-bgMain peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="lastName"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-bgMain peer-focus:dark:text-bgMain peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Last Name
                  </label>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={regFormData.email}
                    onChange={handleRegChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-bgMain focus:outline-none focus:ring-0 focus:border-bgMain peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-bgMain peer-focus:dark:text-bgMain peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="restaurantName"
                    id="restaurantName"
                    value={regFormData.restaurantName}
                    onChange={handleRegChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-bgMain focus:outline-none focus:ring-0 focus:border-bgMain peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="restaurantName"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-bgMain peer-focus:dark:text-bgMain peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Restaurant Name
                  </label>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="restaurantPhone"
                    id="restaurantPhone"
                    value={regFormData.restaurantPhone}
                    onChange={handleRegChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-bgMain focus:outline-none focus:ring-0 focus:border-bgMain peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="restaurantPhone"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-bgMain peer-focus:dark:text-bgMain peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Restaurant Phone Number
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="restaurantCity"
                    id="restaurantCity"
                    value={regFormData.restaurantCity}
                    onChange={handleRegChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-bgMain focus:outline-none focus:ring-0 focus:border-bgMain peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="restaurantCity"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-bgMain peer-focus:dark:text-bgMain peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Restaurant City
                  </label>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="restaurantState"
                    id="restaurantState"
                    value={regFormData.restaurantState}
                    onChange={handleRegChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-bgMain focus:outline-none focus:ring-0 focus:border-bgMain peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="restaurantState"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-bgMain peer-focus:dark:text-bgMain peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Restaurant State
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="restaurantZip"
                    id="restaurantZip"
                    value={regFormData.restaurantZip}
                    onChange={handleRegChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-bgMain focus:outline-none focus:ring-0 focus:border-bgMain peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="restaurantCity"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-bgMain peer-focus:dark:text-bgMain peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Restaurant Zip
                  </label>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="restaurantCountry"
                    id="restaurantCountry"
                    value={regFormData.restaurantCountry}
                    onChange={handleRegChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-bgMain focus:outline-none focus:ring-0 focus:border-bgMain peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="restaurantCountry"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-bgMain peer-focus:dark:text-bgMain peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Restaurant Country
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="restaurantReason"
                    id="restaurantReason"
                    value={regFormData.restaurantReason}
                    onChange={handleRegChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-bgMain focus:outline-none focus:ring-0 focus:border-bgMain peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="restaurantReason"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-bgMain peer-focus:dark:text-bgMain peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Why are you contacting us?
                  </label>
                </div>
              </div>
              {errorReg && (
                <p className="text-red-500 text-sm mb-4">{errorReg}</p>
              )}
              <button
                type="submit"
                disabled={isErrorLoading}
                className={`text-white mt-4 bg-bgMain hover:bg-bgSecondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-10 py-3 text-center dark:bg-gray-700 dark:hover:bg-bgSecondary dark:focus:ring-blue-800 ${
                  isErrorLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isErrorLoading ? "Registering..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ShopRegister;
