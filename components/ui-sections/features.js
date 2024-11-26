import Image from "next/image";
import Coin from "../../public/coin.png";
import Money from "../../public/money.png";
import Exchange from "../../public/exchange.png";

function Features() {
  const logInCustomer = localStorage.getItem("customerData");
  const logInCustomerData = JSON.parse(logInCustomer);
  const logInCustomerLoyalty = logInCustomerData.loyalty;
  const available_points = logInCustomerLoyalty?.available_points.toFixed(2);
  const available_amount = logInCustomerLoyalty?.available_amount.toFixed(2);
  console.log(available_points);
  return (
    <section className="features-area mx-auto max-w-4xl p-4 pt-20">
      <div className="all-features grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8">
        <div className="feature w-full bg-white p-8 py-12 rounded-lg flex flex-col items-center shadow-2xl relative">
          <div className="feature-image absolute top-[-30px] left-[30px] p-2 bg-bgSecondary border-8 rounded-lg border-bgMain">
            <Image height={45} src={Coin} alt="coin image" />
          </div>
          <div className="feature-text mt-3 text-center">
            <h2>{available_points}</h2>
            <h2>Points Available </h2>
          </div>
        </div>
        <div className="feature w-full bg-white p-8 py-12 rounded-lg flex flex-col items-center shadow-2xl relative">
          <div className="feature-image absolute top-[-30px] left-[30px] p-2 bg-bgSecondary border-8 rounded-lg border-bgMain">
            <Image height={45} src={Money} alt="coin image" />
          </div>
          <div className="feature-text mt-3 text-center">
            <h2>{available_amount}</h2>
            <h2>Amount Available</h2>
          </div>
        </div>
        <div className="feature w-full bg-bgSecondary text-cyan-50 p-8 py-12 rounded-lg flex items-center justify-center shadow-2xl cursor-pointer relative">
          <div className="feature-image absolute top-[-30px] left-[30px] p-2 bg-bgSecondary border-8 rounded-lg border-bgMain">
            <Image height={45} src={Exchange} alt="coin image" />
          </div>
          <div className="feature-text mt-3 text-center">
            <h2 className="text-2xl">Redeem</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
