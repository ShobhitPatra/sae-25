import Image from "next/image";
import gear from "public/gear.png";
import Button from "./ui/Button";
const HeroSecttion = () => {
  return (
    <section className=" md:pt-56  flex justify-center">
      {/* left-side-heading  */}
      <div className="flex-col ">
        <p className="p-2 md:text-4xl text-white font-poppins font-semibold ">
          WELCOME TO
        </p>
        <p className="p-1 md:text-7xl font-poppins font-semibold bg-gradient-to-r from-[#FF8400] via-[#FFA953] to-[#FF982E] bg-clip-text text-transparent">
          SAE COLLEGIATE
        </p>
        <p className="p-1 md:text-7xl font-poppins font-semibold bg-gradient-to-r from-[#FF8400] via-[#FFA953] to-[#FF982E] bg-clip-text text-transparent">
          CLUB
        </p>
        <p className="p-2 md:text-4xl text-white font-poppins font-semibold ">
          OF
        </p>
        <p className="p-1 md:text-7xl font-poppins font-semibold bg-gradient-to-r from-[#FF8400] via-[#FFA953] to-[#FF982E] bg-clip-text text-transparent">
          OPJU
        </p>
        <p className="p-3 my-6 text-white md:w-[500px] font-barlow font-medium ">
          Connect with like-minded entrepreneurs and find the perfect co-founder
          to complement your vision and skills. Start building your dream team
          today
        </p>
        <Button />
      </div>
      {/* gear  */}
      <div>
        <Image src={gear} alt="gear" />
      </div>
    </section>
  );
};

export default HeroSecttion;
