import Image from "next/image";
import React from "react";
import gropPic from "public/aboutUsGroupPic.png";
import Divider from "./ui/Divider";
import DropdownIcon from "./ui/DropdownIcon";

const Hero2 = () => {
  return (
    <section className="flex flex-wrap justify-between w-full bg-[#2B2C2C] md:pt-20 ">
      <div className="  ">
        <Image src={gropPic} alt="groupPic" />
      </div>
      {/* aboutus  */}
      <div className="md:mr-48 md:mt-20">
        <ul>
          <li>
            <h1 className="p-1 md:text-7xl  py-6 font-poppins font-semibold bg-gradient-to-r from-[#FF8400] via-[#FFA953] to-[#FF982E] bg-clip-text text-transparent  ">
              ABOUT US
            </h1>
          </li>
          <Divider />

          {/* introduction  */}
          <li>
            <div className="flex justify-between items-center  py-3">
              <label className="text-white text-3xl px-3 py-4">
                1.Introduction
              </label>
              <DropdownIcon />
            </div>
          </li>
          <Divider />
          {/* Oppurtunity */}
          <li>
            <div className="flex justify-between items-center py-3">
              <label className="text-white text-3xl px-3 py-4">
                2.Oppurtunity
              </label>
              <DropdownIcon />
            </div>
          </li>
          <Divider />
          {/* Workshops */}
          <li>
            <div className="flex justify-between items-center py-3">
              <label className="text-white text-3xl px-3 py-4">
                3.Workshops
              </label>
              <DropdownIcon />
            </div>
          </li>
          <Divider />
          {/* 4.Industry Exposure */}
          <li>
            <div className="flex justify-between items-center py-3">
              <label className="text-white text-3xl px-3 py-4">
                4.Industry Exposure
              </label>
              <DropdownIcon />
            </div>
          </li>
          <Divider />
          {/* Personal Growth */}
          <li>
            <div className="flex justify-between items-center py-3">
              <label className="text-white text-3xl px-3 py-4">
                5.Personal Growth
              </label>
              <DropdownIcon />
            </div>
          </li>
          <Divider />
        </ul>
      </div>
    </section>
  );
};

export default Hero2;
