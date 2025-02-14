import Image from "next/image";
import upcoming_wheel from "public/upcoming_wheel.png";
import HomeCard from "../ui/HomeCard";
import upcmng_events from "public/upcmng_events.png";
import upcmng_saeIndia from "public/upcmng_saeIndia.png";
import upcmng_projects from "public/upcmng_projects.png";

const Upcoming = () => {
  return (
    <section className="flex-col items-center w-full bg-[#2B2C2C]  ">
      {/* upcoming heading */}
      <div className="flex md:pl-16">
        <p className="p-1 md:text-7xl font-poppins font-semibold bg-gradient-to-r from-[#FF8400] via-[#FFA953] to-[#FF982E] bg-clip-text text-transparent">
          UPCOMING
        </p>
        <Image src={upcoming_wheel} alt="upcoming-wheel" className="size-20" />
      </div>
      {/* panel  */}
      <div className="flex flex-wrap justify-evenly p-8">
        <HomeCard
          image={upcmng_events}
          title="EVENTS"
          content="Connect with like-minded entrepreneurs and find the perfect co-founder to complement your vision and skills. Start building your dream team today"
        />
        <HomeCard
          image={upcmng_saeIndia}
          title="SAE INDIA"
          content="Connect with like-minded entrepreneurs and find the perfect co-founder to complement your vision and skills. Start building your dream team today    "
        />
        <HomeCard
          image={upcmng_projects}
          title="PROJECTS"
          content="Connect with like-minded entrepreneurs and find the perfect co-founder to complement your vision and skills. Start building your dream team today"
        />
      </div>
    </section>
  );
};

export default Upcoming;
