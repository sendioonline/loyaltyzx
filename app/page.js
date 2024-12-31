import About from "@/components/about";
import Advantage from "@/components/advantage";
import AllShops from "@/components/allShops";
import Footer from "@/components/footer";
import MainBanner from "@/components/mainBanner";
import MainHeader from "@/components/mainHeader";
import MainSteps from "@/components/mainSteps";

export default function Home() {
  return (
    <>
      <MainHeader />
      <MainBanner buttonLink="/get-started" buttonText="Get Started" />
      <MainSteps />
      <AllShops />
      <Advantage />
      <About />
      <Footer />
    </>
  );
}
