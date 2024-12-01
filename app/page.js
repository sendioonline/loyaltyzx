import MainHeader from "@/components/shopHeader";
import AllShop from "@/components/ui-sections/allShop";
import Banner from "@/components/ui-sections/banner";
import Hero from "@/components/ui-sections/hero";

async function Home() {
  return (
    <>
      <MainHeader />
      <Hero buttonLink="/register" buttonText="Register Shop" />
      <AllShop />
    </>
  );
}

export default Home;
