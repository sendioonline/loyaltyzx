import Image from "next/image";
import Coin from "../public/coin.png";
function Feature() {
  return (
    <div className="feature w-full bg-white p-4 rounded-lg flex flex-col items-center shadow-2xl">
      <div className="feature-image">
        <Image height={65} src={Coin} alt="coin image" />
      </div>
      <div className="feature-text mt-3 text-center">
        <h2>25,00</h2>
        <h2>Loyalty Points</h2>
      </div>
    </div>
  );
}

export default Feature;
