"use client";
import { useState } from "react";
import axios from "axios"; // Import Axios

function LoginForm() {
  const [email, setEmail] = useState(""); // State to store email input
  const [errorMessage, setErrorMessage] = useState(""); // State to store API error message
  const [isLoading, setIsLoading] = useState(false); // State for button loading

  const handleSubmit = async (e) => {
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
      const userStatus = response.data.status;
      console.log(userStatus);
      //   const { exists } = response.data; // Extract 'exists' from response
      if (userStatus === "success") {
        alert("User already exists. Please log in.");
      } else {
        alert("User not found. Proceed to register!");
      }
    } catch (error) {
      if (error.response) {
        // Server responded with a status
        setErrorMessage(
          error.response.data.message || "Something went wrong. Try again."
        );
      } else {
        // No response or network error
        setErrorMessage("Failed to connect to the server. Please try again.");
      }
    } finally {
      setIsLoading(false); // Remove loading state
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
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
        {isLoading ? "Checking..." : "Register new account"}
      </button>
    </form>
  );
}

export default LoginForm;
