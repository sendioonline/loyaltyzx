"use client";
import { useState } from "react";
import axios from "axios"; // Import Axios
import { useRouter } from "next/navigation";

function LogReg() {
  const [activeForm, setActiveForm] = useState("login");
  const [email, setEmail] = useState(""); // State to store email input
  const [errorMessage, setErrorMessage] = useState(""); // State to store API error message
  const [isLoading, setIsLoading] = useState(false); // State for button loading
  const router = useRouter();

  const [otp, setOTP] = useState(""); // State to store email input
  const [errorOTP, setErrorOTP] = useState(""); // State to store API error message
  const [isOTPLoading, setIsOTPLoading] = useState(false); // State for button loading

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
          email: "biswaadhikary.bd@gmail.com",
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
        const loyaltyUser = userData.data.loyalty;
        console.log("User data available.");
        // console.log(loyaltyUser);
        if (loyaltyUser === false) {
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
        console.log("User data not available.");
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
      router.push("/dashboard");
    }
  };

  switch (activeForm) {
    case "login":
      return (
        <>
          <form onSubmit={handleSubmitLogin} className="max-w-sm mx-auto">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update state on input change
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@example.com"
              required
            />
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
            <label
              htmlFor="otp"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your otp
            </label>
            <input
              type="number"
              id="otp"
              value={otp}
              onChange={(e) => setOTP(e.target.value)} // Update state on input change
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="123456"
              required
            />
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
  }
}

export default LogReg;
