import Image from "next/image";
import sae_logo from "public/sae_logo.png";
import opju_logo from "public/OPJU_LOGO.png";
const Navbar = () => {
  return (
    <header className="flex justify-between items-center max-w-[1361px] w-[90%] mx-auto  left-1/2 -translate-x-1/2 fixed  h-20  mt-7 rounded-[49px]  bg-gradient-to-r from-[rgba(255,255,255,0.15)] via-[rgba(115,115,115,0)] to-[rgba(255,255,255,0.5)] backdrop-blur-[75px] border-[3px] border-[#FF8400]">
      {/* left-section  */}
      <section>
        <Image src={opju_logo} alt="opju-logo" className="w-36" />
      </section>
      {/* right-section  */}
      <section>
        <ul className="flex gap-x-8 items-center">
          <li>
            <h3 className="md:text-2xl font-Poppins text-white font-medium  ">
              HOME{" "}
            </h3>
          </li>
          <li>
            <h3 className="md:text-2xl font-Poppins text-orange-500 font-medium ">
              GALLERY{" "}
            </h3>
          </li>
          <li>
            <h3 className="md:text-2xl font-Poppins text-white font-medium  ">
              EVENTS
            </h3>
          </li>
          <li>
            <h3 className="md:text-2xl font-Poppins text-white font-medium  ">
              PROJECTS
            </h3>
          </li>
          <li>
            <h3 className="md:text-2xl font-Poppins text-white font-medium  ">
              MEMBERS
            </h3>
          </li>
          <li>
            <Image src={sae_logo} alt="sae-logo" className="w-24" />
          </li>
        </ul>
      </section>
    </header>
  );
};

export default Navbar;
