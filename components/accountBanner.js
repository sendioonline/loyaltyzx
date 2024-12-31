import LogReg from "./logReg";

async function AccountBanner({ bgImage, shopID, shopName, buttonText }) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-8 pt-4 md:p-0 bg-bgMain/5 dark:bg-bgSecondary">
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
        className="w-full object-cover h-72 lg:w-full md:h-[calc(100vh-144px)] bg-cover bg-center rounded-[20px] md:rounded-r-[40px] md:rounded-l-[0]"
      ></div>
      <div className="flex md:items-center pb-8 md:pb-0">
        <LogReg shopID={shopID} shopName={shopName} buttonText={buttonText} />
      </div>
    </section>
  );
}

export default AccountBanner;
