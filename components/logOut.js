import { useRouter } from "next/navigation";
import RightArrow from "./ui-components/rightarrow";

function LogOut() {
  const router = useRouter();
  const handelLogOut = () => {
    router.push("/login");
    localStorage.removeItem("customerData");
  };
  return (
    <div className="text-center mb-20">
      <button
        onClick={handelLogOut}
        className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-bgMain hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
      >
        Log Out
        <RightArrow />
      </button>
    </div>
  );
}

export default LogOut;
