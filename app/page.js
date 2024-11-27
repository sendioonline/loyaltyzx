import AllShop from "@/components/ui-sections/allShop";
import Hero from "@/components/ui-sections/hero";

function Home() {
  return (
    <>
      <Hero buttonLink="login" buttonText="Login Now" />
      <AllShop />
    </>
  );
}

export default Home;
