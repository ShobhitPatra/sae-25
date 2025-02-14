import Image from "next/image";
import upcoming_wheel from "public/upcoming_wheel.png";

const Upcoming = () => {
  return (
    <section className="flex items-center w-full bg-[#2B2C2C]  ">
      {/* upcoming heading */}
      <div className="flex md:pl-16">
        <p className="p-1 md:text-7xl font-poppins font-semibold bg-gradient-to-r from-[#FF8400] via-[#FFA953] to-[#FF982E] bg-clip-text text-transparent">
          UPCOMING
        </p>
        <Image src={upcoming_wheel} alt="upcoming-wheel" className="size-20" />
      </div>
    </section>
  );
};

export default Upcoming;
