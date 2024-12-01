import LogRegNew from "../loginRegNew";

async function UserLoginReg({ bgImage }) {
  return (
    <>
      <section className="grid grid-flow-col grid-rows-2 sm:grid-rows-2 sm:grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-4 p-4 md:p-0">
        <div
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-full object-cover mb-6 md:mb-0 lg:w-full h-48 md:h-[calc(100vh-103px)] bg-cover bg-center rounded-[20px] md:rounded-r-[40px] md:rounded-l-[0]"
        ></div>
        <div className="flex items-center justify-center">
          <div className="customer-register w-full max-w-md">
            {/* <h2 className="text-3xl mb-6">LOGIN NOW</h2> */}
            <LogRegNew />
          </div>
        </div>
      </section>
    </>
  );
}

export default UserLoginReg;
