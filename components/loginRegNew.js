"use client";
import { useState } from "react";
import axios from "axios"; // Import Axios
import { useRouter } from "next/navigation";

function LogRegNew() {
  // const shopData = localStorage.getItem("shopData");
  // const mainShopData = JSON.parse(shopData);
  // const companyID = mainShopData.company_id;
  // console.log(companyID);
  const [activeForm, setActiveForm] = useState("login");
  const [email, setEmail] = useState(""); // State to store email input
  const [errorMessage, setErrorMessage] = useState(""); // State to store API error message
  const [isLoading, setIsLoading] = useState(false); // State for button loading
  const router = useRouter();

  const [otp, setOTP] = useState(""); // State to store email input
  const [errorOTP, setErrorOTP] = useState(""); // State to store API error message
  const [isOTPLoading, setIsOTPLoading] = useState(false); // State for button loading

  const [errorReg, setErrorReg] = useState(""); // State to store API error message
  const [isErrorLoading, setIsErrorLoading] = useState(false); // State for button loading
  const [regFormData, setRegFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    street: "",
    city: "",
    postcode: "",
    shop_id: 42,
  });

  const handleRegChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    setRegFormData({
      ...regFormData,
      [name]: value,
    });
  };

  const encodeOTP = (otp) => {
    return btoa(otp); // Base64 encoding
  };

  const generateAndStoreOTP = (otp) => {
    const encodedOTP = encodeOTP(otp);
    localStorage.setItem("encodedOTP", encodedOTP); // Store in localStorage
    return encodedOTP;
  };

  const sendEmailOTP = async (email, otp) => {
    try {
      const mailstatus = await axios.post(
        "https://retransformx.online/rest-api/sendmail/shop-send-mail",
        {
          shopid: 42,
          email: email,
          subject: "Loyaltyzx OTP",
          htmlbody: `Your OTP is: ${otp}`,
        },
        {
          headers: {
            shop_id: 42,
            Authorization:
              "OXU0c0JkY3AyNU1acmFqRTM3U1kxeGx2azpCNFJ6VWRIcnB4RXVxVFdPUUdKWFBudEw4",
          },
        }
      );
      console.log(email);
      console.log("Email sent successfully:", mailstatus.data);
      return mailstatus.data;
    } catch (error) {
      setErrorMessage(error.message); // Capture and set error
    }
  };

  const decodeOTP = (encodedOTP) => {
    return atob(encodedOTP); // Base64 decoding
  };

  const validateOTP = (userInput) => {
    const encodedOTP = localStorage.getItem("encodedOTP");
    if (!encodedOTP) {
      return {
        success: false,
        message: "No OTP stored. Please request a new OTP.",
      };
    }

    const decodedOTP = decodeOTP(encodedOTP);
    if (userInput === decodedOTP) {
      return { success: true, message: "OTP validated successfully!" };
    } else {
      return { success: false, message: "Invalid OTP." };
    }
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    setErrorMessage(""); // Reset error message
    setIsLoading(true); // Show loading state

    try {
      const response = await axios.get(
        "https://retransformx.online/rest-api/customer",
        {
          params: {
            filter_by: `[email=${email}]`, // Dynamically insert email here
            per_page: 1,
          },
          headers: {
            shop_id: "42",
            Authorization:
              "OXU0c0JkY3AyNU1acmFqRTM3U1kxeGx2azpCNFJ6VWRIcnB4RXVxVFdPUUdKWFBudEw4",
          },
        }
      );
      const userData = response.data;
      console.log(userData);
      if (userData.status === "success") {
        localStorage.setItem("customerData", JSON.stringify(userData.data));
        const loyaltyUser = userData.data.loyalty;
        console.log("User data available.");
        console.log(userData.data);
        setRegFormData({
          ...regFormData,
          name: userData.data.name,
          email: userData.data.email,
          phone: userData.data.phone,
          address: userData.data.address[0].full_address,
          street: userData.data.address[0].street,
          city: userData.data.address[0].street,
          postcode: userData.data.address[0].postcode,
        });
        // console.log(loyaltyUser);
        if (loyaltyUser === false) {
          setActiveForm("regform");
          console.log("Not Loyalty User");
        } else {
          // Generate a random 6-digit OTP and store it
          const otp = Math.floor(100000 + Math.random() * 900000).toString();
          generateAndStoreOTP(otp);
          sendEmailOTP(email, otp);
          console.log("OTP sent to the user:", otp);
          setActiveForm("otpform");
        }
      } else {
        setActiveForm("regform");
        console.log("User data not available.");
        setRegFormData({
          ...regFormData,
          email: email,
        });
      }
    } catch (err) {
      setErrorMessage(err.message); // Capture and set error
    } finally {
      setIsLoading(false); // Set loading to false
    }
  };

  const handleSubmitOTP = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    setErrorOTP(""); // Reset error message
    setIsOTPLoading(true); // Show loading state
    const validationResult = validateOTP(otp);
    console.log(validationResult.message);
    if (validationResult.success) {
      localStorage.removeItem("encodedOTP");
      localStorage.setItem("logedInUser", email);
      router.push("/dashboard");
    }
  };

  const handleSubmitREG = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    setErrorReg(""); // Reset error message
    setIsErrorLoading(true); // Show loading state
    console.log(regFormData);

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

  switch (activeForm) {
    case "login":
      return (
        <>
          <form onSubmit={handleSubmitLogin} className="max-w-sm mx-auto">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block py-2.5 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-bgMain focus:outline-none focus:ring-0 focus:border-bgMain peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-bgMain peer-focus:dark:text-bgMain peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            {errorMessage && (
              <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className={`text-white bg-bgMain hover:bg-bgSecondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-700 dark:hover:bg-bgSecondary dark:focus:ring-blue-800 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? "Checking..." : "Send OTP"}
            </button>
          </form>
        </>
      );
    case "otpform":
      return (
        <>
          <form onSubmit={handleSubmitOTP} className="max-w-sm mx-auto">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="number"
                name="otp"
                id="otp"
                value={otp}
                onChange={(e) => setOTP(e.target.value)}
                className="block py-2.5 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-bgMain focus:outline-none focus:ring-0 focus:border-bgMain peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="otp"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-bgMain peer-focus:dark:text-bgMain peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Your OTP
              </label>
            </div>
            {errorOTP && (
              <p className="text-red-500 text-sm mb-4">{errorOTP}</p>
            )}
            <button
              type="submit"
              disabled={isOTPLoading}
              className={`text-white bg-bgMain hover:bg-bgSecondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-700 dark:hover:bg-bgSecondary dark:focus:ring-blue-800 ${
                isOTPLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isOTPLoading ? "Checking..." : "Submit OTP"}
            </button>
          </form>
        </>
      );
    case "regform":
      return (
        <>
          <form className="max-w-md mx-auto" onSubmit={handleSubmitREG}>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="name"
                id="name"
                value={regFormData.name}
                onChange={handleRegChange}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-bgMain focus:outline-none focus:ring-0 focus:border-bgMain peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-bgMain peer-focus:dark:text-bgMain peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-bgMain focus:outline-none focus:ring-0 focus:border-bgMain peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-bgMain peer-focus:dark:text-bgMain peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-bgMain focus:outline-none focus:ring-0 focus:border-bgMain peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-bgMain peer-focus:dark:text-bgMain peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-bgMain focus:outline-none focus:ring-0 focus:border-bgMain peer"
                placeholder=" "
              />
              <label
                htmlFor="address"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-bgMain peer-focus:dark:text-bgMain peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-bgMain focus:outline-none focus:ring-0 focus:border-bgMain peer"
                placeholder=" "
              />
              <label
                htmlFor="street"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-bgMain peer-focus:dark:text-bgMain peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-bgMain focus:outline-none focus:ring-0 focus:border-bgMain peer"
                  placeholder=" "
                />
                <label
                  htmlFor="city"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-bgMain peer-focus:dark:text-bgMain peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  City
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="postcode"
                  id="postcode"
                  value={regFormData.postcode}
                  onChange={handleRegChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-bgMain focus:outline-none focus:ring-0 focus:border-bgMain peer"
                  placeholder=" "
                />
                <label
                  htmlFor="postcode"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-bgMain peer-focus:dark:text-bgMain peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Postcode
                </label>
              </div>
            </div>
            {errorOTP && (
              <p className="text-red-500 text-sm mb-4">{errorReg}</p>
            )}
            <button
              type="submit"
              disabled={isErrorLoading}
              className={`text-white bg-bgMain hover:bg-bgSecondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-700 dark:hover:bg-bgSecondary dark:focus:ring-blue-800 ${
                isOTPLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isErrorLoading ? "Registering..." : "Register Now"}
            </button>
          </form>
        </>
      );
  }
}

export default LogRegNew;
