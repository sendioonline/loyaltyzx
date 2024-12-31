"use client";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function LogReg({ shopID, shopName, buttonText }) {
  const [activeForm, setActiveForm] = useState("login");
  const [nextStatue, setNextStatue] = useState("Email");
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [emailLoading, setEmailLoading] = useState(false);
  const [token, setToken] = useState("");

  const [mobile, setMobile] = useState("");
  const [errorMobile, setErrorMobile] = useState("");
  const [mobileLoading, setMobileLoading] = useState(false);

  const [otp, setOTP] = useState("");
  const [errorOTP, setErrorOTP] = useState("");
  const [otpStep, setOtpStep] = useState(0);
  const [otpLoading, setOtpLoading] = useState(false);

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

  const handleRegChange = (e) => {
    const { name, value } = e.target;
    setRegFormData({
      ...regFormData,
      [name]: value,
    });
  };

  // Send Email OTP
  const sendEmailOTP = async (email, otp) => {
    try {
      const mailstatus = await axios.post(
        "https://sendio.online/rest-api/sendmail/shop-send-mail",
        {
          shopid: shopID,
          email: email,
          subject: "Loyaltyzx Login OTP",
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
      return mailstatus.data;
    } catch (error) {
      setErrorOTP(error.message);
    }
  };

  // Send SMS OTP
  const sendSMSOTP = async (mobile, otp) => {
    try {
      const mobilestatus = await axios.post(
        "https://retransformx.online/rest-api/sms",
        {
          recipient: mobile,
          message: `Your OTP is: ${otp}`,
        },
        {
          headers: {
            shop_id: 42,
            Authorization:
              "OXU0c0JkY3AyNU1acmFqRTM3U1kxeGx2azpCNFJ6VWRIcnB4RXVxVFdPUUdKWFBudEw4",
          },
        }
      );
      return mobilestatus.data;
    } catch (error) {
      setErrorMobile(error.message);
    }
  };

  const handleGenerateEmailOtp = async () => {
    try {
      const response = await fetch("/api/generate-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });

      const data = await response.json();
      if (response.ok) {
        setToken(data.token);
        sendEmailOTP(email, data.otp);
      } else {
        console.log(data.message || "Failed to send OTP");
      }
    } catch (error) {
      console.log("An error occurred while generating OTP.");
    }
  };

  const handleGenerateSMSOtp = async () => {
    try {
      const response = await fetch("/api/generate-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone: mobile }),
      });

      const data = await response.json();
      if (response.ok) {
        setToken(data.token);
        sendSMSOTP(mobile, data.otp);
      } else {
        console.log(data.message || "Failed to send OTP");
      }
    } catch (error) {
      console.log("An error occurred while generating OTP.");
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await fetch("/api/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ otp, token }),
      });

      const data = await response.json();

      if (response.ok) {
        return { success: true };
      } else {
        console.log(data.message || "Invalid OTP");
        return { success: false };
      }
    } catch (error) {
      console.log("An error occurred");
    }
  };

  const handleSubmitLoginMobile = async (e) => {
    e.preventDefault();
    setErrorMobile("");
    setMobileLoading(true);

    try {
      const response = await axios.get(
        "https://sendio.online/rest-api/customer",
        {
          params: {
            filter_by: `[phone=${mobile}]`,
            per_page: 1,
          },
          headers: {
            shop_id: shopID,
            Authorization:
              "OXU0c0JkY3AyNU1acmFqRTM3U1kxeGx2azpCNFJ6VWRIcnB4RXVxVFdPUUdKWFBudEw4",
          },
        }
      );
      const userData = response.data;
      if (userData.status === "success") {
        sessionStorage.setItem("customerData", JSON.stringify(userData.data));
        const loyaltyUser = userData.data.loyalty;
        setRegFormData({
          ...regFormData,
          name: userData.data.name,
          email: userData.data.email,
          phone: userData.data.phone,
          address: userData.data.address[0]?.full_address,
          street: userData.data.address[0]?.street,
          city: userData.data.address[0]?.street,
          postcode: userData.data.address[0]?.postcode,
        });
        if (loyaltyUser === false) {
          setActiveForm("regform");
        } else {
          handleGenerateSMSOtp();
          toast.success("SMS OTP sent successfully");
          setActiveForm("otpform");
          setNextStatue("login");
        }
      } else {
        setActiveForm("regform");
        setRegFormData({
          ...regFormData,
          phone: mobile,
        });
      }
    } catch (err) {
      setErrorEmail(err.message);
    } finally {
      setMobileLoading(false);
    }
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    setErrorEmail("");
    setEmailLoading(true);

    try {
      const response = await axios.get(
        "https://sendio.online/rest-api/customer",
        {
          params: {
            filter_by: `[email=${email}]`, // Dynamically insert email here
            per_page: 1,
          },
          headers: {
            shop_id: shopID,
            Authorization:
              "OXU0c0JkY3AyNU1acmFqRTM3U1kxeGx2azpCNFJ6VWRIcnB4RXVxVFdPUUdKWFBudEw4",
          },
        }
      );
      const userData = response.data;
      if (userData.status === "success") {
        sessionStorage.setItem("customerData", JSON.stringify(userData.data));
        const loyaltyUser = userData.data.loyalty;
        setRegFormData({
          ...regFormData,
          name: userData.data.name,
          email: userData.data.email,
          phone: userData.data.phone,
          address: userData.data.address[0]?.full_address,
          street: userData.data.address[0]?.street,
          city: userData.data.address[0]?.street,
          postcode: userData.data.address[0]?.postcode,
        });
        if (loyaltyUser === false) {
          setActiveForm("regform");
        } else {
          handleGenerateEmailOtp();
          toast.success("Email OTP sent successfully");
          setActiveForm("otpform");
          setNextStatue("login-mobile");
        }
      } else {
        setActiveForm("regform");
        setRegFormData({
          ...regFormData,
          email: email,
        });
      }
    } catch (err) {
      setErrorEmail(err.message);
    } finally {
      setEmailLoading(false);
    }
  };

  const handleSubmitOTP = async (e) => {
    e.preventDefault();
    setOtpStep(otpStep + 1);
    setErrorOTP("");
    setOtpLoading(true);
    const validationResult = handleVerifyOtp();
    validationResult
      .then((result) => {
        if (result.success === true) {
          sessionStorage.setItem("userShop", shopName);
          sessionStorage.setItem("userEmail", email);
          sessionStorage.setItem("shopID", shopID);
          sessionStorage.setItem("userStatus", true);
          toast.success("Login Successful!");
          router.push(`/${shopName}/dashboard`);
        } else {
          setOtpLoading(false);
          toast.error("Invalid OTP, Try Again!");
        }
      })
      .catch((error) => {
        console.error(error);
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
          name: regFormData.name,
          email: regFormData.email,
          phone: regFormData.phone,
          address: regFormData.full_address,
          street: regFormData.street,
          city: regFormData.street,
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
      sessionStorage.setItem("userEmail", email);
      sessionStorage.setItem("shopID", shopID);
      sessionStorage.setItem("userStatus", true);
      router.push(`/${shopName}/dashboard`);
    } catch (error) {
      setErrorReg(error.message);
    }
  };

  switch (activeForm) {
    case "login":
      return (
        <>
          <form
            onSubmit={handleSubmitLogin}
            className="w-full max-w-[450px] mx-auto p-2"
          >
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block py-2.5 px-0 w-full text-lg text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-bgMain focus:outline-none focus:ring-0 focus:border-bgMain peer"
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
            {errorEmail && (
              <p className="text-red-500 text-sm mb-4">{errorEmail}</p>
            )}
            <button
              type="submit"
              disabled={emailLoading}
              className={`text-white bg-bgMain hover:bg-bgSecondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 text-center dark:bg-gray-700 dark:hover:bg-bgSecondary dark:focus:ring-blue-800 ${
                emailLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {emailLoading ? "Checking..." : buttonText}
            </button>

            <div
              className="text-sm mt-4"
              onClick={() => {
                setActiveForm("login-mobile");
                setMobile("");
              }}
            >
              <p className="cursor-pointer text-md font-semibold">
                Use Mobile OTP
              </p>
            </div>
          </form>
        </>
      );
    case "login-mobile":
      return (
        <>
          <form
            onSubmit={handleSubmitLoginMobile}
            className="w-full max-w-[450px] mx-auto p-2"
          >
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="tell"
                name="mobile"
                id="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="block py-2.5 px-0 w-full text-lg text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-bgMain focus:outline-none focus:ring-0 focus:border-bgMain peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="mobile"
                className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-bgMain peer-focus:dark:text-bgMain peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Mobile no
              </label>
            </div>
            {errorMobile && (
              <p className="text-red-500 text-sm mb-4">{errorMobile}</p>
            )}
            <button
              type="submit"
              disabled={mobileLoading}
              className={`text-white bg-bgMain hover:bg-bgSecondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 text-center dark:bg-gray-700 dark:hover:bg-bgSecondary dark:focus:ring-blue-800 ${
                mobileLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {mobileLoading ? "Checking..." : buttonText}
            </button>
            <div
              className="text-sm mt-4"
              onClick={() => {
                setActiveForm("login");
                setEmail("");
              }}
            >
              <p className="cursor-pointer text-md font-semibold">
                Use Email OTP
              </p>
            </div>
          </form>
        </>
      );
    case "otpform":
      return (
        <>
          <form
            onSubmit={handleSubmitOTP}
            className="w-full max-w-[450px] mx-auto  p-2"
          >
            {otpStep <= 2 ? (
              <>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="number"
                    name="otp"
                    id="otp"
                    value={otp}
                    onChange={(e) => setOTP(e.target.value)}
                    className="block py-2.5 px-0 w-full text-lg text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-bgMain focus:outline-none focus:ring-0 focus:border-bgMain peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="otp"
                    className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-bgMain peer-focus:dark:text-bgMain peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Your OTP
                  </label>
                </div>
                {errorOTP && (
                  <p className="text-red-500 text-sm mb-4">{errorOTP}</p>
                )}
                <button
                  type="submit"
                  disabled={otpLoading}
                  className={`text-white bg-bgMain hover:bg-bgSecondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 text-center dark:bg-gray-700 dark:hover:bg-bgSecondary dark:focus:ring-blue-800 ${
                    otpLoading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {otpLoading ? "Checking..." : "Submit OTP"}
                </button>
                <div className="text-sm mt-4">
                  <p className="text-sm">
                    Try New OTP Using{" "}
                    <span
                      className="cursor-pointer font-semibold"
                      onClick={() => {
                        setActiveForm("login");
                        setOtpStep(0);
                        setOTP("");
                      }}
                    >
                      Email
                    </span>{" "}
                    or{" "}
                    <span
                      className="cursor-pointer font-semibold"
                      onClick={() => {
                        setActiveForm("login-mobile");
                        setOtpStep(0);
                        setOTP("");
                      }}
                    >
                      Phone
                    </span>
                  </p>
                </div>
                {/* <div
                  className="text-sm mt-4"
                  onClick={() => setActiveForm(nextStatue)}
                >
                  <p className="cursor-pointer">
                    Try {nextStatue === "login-mobile" ? "Mobile" : "Email"} OTP
                  </p>
                </div> */}
              </>
            ) : (
              <div className="text-sm mt-4">
                <p className="text-lg">
                  Maximum 3 attempts reached. Please generate a new OTP using{" "}
                  <span
                    className="cursor-pointer font-semibold"
                    onClick={() => {
                      setActiveForm("login");
                      setOtpStep(0);
                      setOTP("");
                    }}
                  >
                    Email
                  </span>{" "}
                  or{" "}
                  <span
                    className="cursor-pointer font-semibold"
                    onClick={() => {
                      setActiveForm("login-mobile");
                      setOtpStep(0);
                      setOTP("");
                    }}
                  >
                    Phone
                  </span>
                </p>
              </div>
            )}
          </form>
        </>
      );
    case "regform":
      return (
        <>
          <form
            className="w-full max-w-[450px] mx-auto  p-2"
            onSubmit={handleSubmitREG}
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
              <div className="relative z-0 w-full mb-5 group">
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
            {errorReg && (
              <p className="text-red-500 text-sm mb-4">{errorReg}</p>
            )}
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
        </>
      );
  }
}

export default LogReg;
