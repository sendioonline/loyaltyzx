"use client";
import { useState } from "react";
import userImage from "../../public/user-image.jpg";
import { useRouter } from "next/navigation";

function ShopLogin() {
  const router = useRouter();
  const [error, setError] = useState(""); // State to store API error message
  const [loading, setLoading] = useState(false); // State for button loading
  const [logFormData, setLogFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogChange = (e) => {
    const { name, value } = e.target;
    setLogFormData({
      ...logFormData,
      [name]: value,
    });
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    setError(""); // Reset error message
    setLoading(true); // Show loading state

    try {
      const regStatus = await axios.post(
        "https://bestloyaltysolution.com/api/AddCustomer_Pos_Loyalty",
        {
          name: logFormData.email,
          email: logFormData.password,
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
          <div className="customer-register w-full max-w-md">
            <h2 className="text-3xl mb-6">LOGIN NOW</h2>
            <form className="" onSubmit={handleSubmitLogin}>
              <div className="grid grid-cols-1">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={logFormData.email}
                    onChange={handleLogChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-bgMain focus:outline-none focus:ring-0 focus:border-bgMain peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-bgMain peer-focus:dark:text-bgMain peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email Address
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={logFormData.password}
                    onChange={handleLogChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-bgMain focus:outline-none focus:ring-0 focus:border-bgMain peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="lastName"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-bgMain peer-focus:dark:text-bgMain peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Password
                  </label>
                </div>
              </div>
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className={`text-white mt-4 bg-bgMain hover:bg-bgSecondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-10 py-3 text-center dark:bg-gray-700 dark:hover:bg-bgSecondary dark:focus:ring-blue-800 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {error ? "Registering..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ShopLogin;
