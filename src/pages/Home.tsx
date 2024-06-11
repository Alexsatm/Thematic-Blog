import { Hero } from "../components/HeroSection/Hero";
import { Newest } from "../components/Newest/Newest";
import { TopSection } from "../components/TopSection/TopSection";


export const Home = () => {
  return (
    <div>
      <Hero/>
      <TopSection/>
      <Newest/>
    </div>
  );
}

