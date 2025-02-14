import Image, { StaticImageData } from "next/image";
import React from "react";

const HomeCard = ({
  image,
  title,
  content,
}: {
  image: StaticImageData;
  title: string;
  content: string;
}) => {
  return (
    <div className="drop-shadow-[0px_4px_20px_rgba(0,0,0,0.25) max-w-80 flex-col gap-y-3">
      <Image src={image} alt="img" className="" />
      <div>
        <h3 className="text-3xl text-white font-semibold">{title}</h3>
        <p>{content}</p>
        <button className="bg-gradient-to-r from-[#FF8400] via-[#FFA953] to-[#FF982E] flex justify-center items-center rounded-full py-3 px-7 ">
          <label className="text-xl font-medium flex items-center justify-center gap-2 text-black">
            Explore{" "}
            <svg
              width="9"
              height="17"
              viewBox="0 0 9 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.309878 0.47278C0.116534 0.728485 0.00992605 1.0737 0.0134981 1.43251C0.01707 1.79132 0.13053 2.13435 0.328926 2.38615L5.56738 9.03283L0.462288 15.7825C0.274509 16.0396 0.172602 16.3824 0.178514 16.7372C0.184427 17.092 0.297686 17.4303 0.493899 17.6792C0.690111 17.9282 0.953578 18.0679 1.22755 18.0683C1.50153 18.0686 1.76409 17.9296 1.95869 17.6811L7.79293 9.96746C7.98627 9.71175 8.09288 9.36653 8.08931 9.00772C8.08573 8.64891 7.97228 8.30589 7.77388 8.05408L1.78723 0.458073C1.58877 0.206344 1.32165 0.06648 1.04461 0.069238C0.767565 0.071996 0.503282 0.21715 0.309878 0.47278Z"
                fill="#2B2C2C"
              />
            </svg>
          </label>
        </button>
      </div>
    </div>
  );
};

export default HomeCard;
