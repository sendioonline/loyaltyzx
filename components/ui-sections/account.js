import Image from "next/image";
import userImage from "../../public/user-image.jpg";
import LoginReg from "../loginReg";
// import Account from "../account";
function Account() {
  return (
    <section className="bg-slate-50 dark:bg-gray-900/70">
      <div className="grid max-w-screen-xl px-6 mx-auto gap-12 md:gap-24 py-12 lg:py-28 lg:grid-cols-2">
        <div className="">
          <Image
            className="rounded-3xl shadow-xl"
            src={userImage}
            alt="Online Shoping"
          />
        </div>
        <div className="mr-auto place-self-center w-full">
          <LoginReg />
          {/* <Account /> */}
          {/* <RegForm /> */}
        </div>
      </div>
    </section>
  );
}

export default Account;