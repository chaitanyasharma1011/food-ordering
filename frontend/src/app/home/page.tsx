import Image from "next/image";
import HeroSection from "./_components/hero-section";
import TopMeals from "./_components/top-meals";
import Handpickedfavs from "./_components/handpicked-favs";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TopMeals />
      <Handpickedfavs />
    </div>
  );
}
