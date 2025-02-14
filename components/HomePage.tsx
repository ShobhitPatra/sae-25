import HeroSecttion from "@/components/HeroSecttion";
import Hero2 from "./Hero2";
import Upcoming from "./homepage/Upcoming";

const HomePage = () => {
  return (
    <main className="h-screen w-full bg-[#2B2C2C]">
      <HeroSecttion />
      <Hero2 />
      <Upcoming />
    </main>
  );
};

export default HomePage;
