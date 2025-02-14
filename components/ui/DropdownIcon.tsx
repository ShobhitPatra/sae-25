import React from "react";

const DropdownIcon = () => {
  return (
    <svg
      width="72"
      height="51"
      viewBox="0 0 72 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_111_1346)">
        <g filter="url(#filter1_d_111_1346)">
          <path
            d="M20 16L36 27L20 16ZM36 27L52 16L36 27Z"
            fill="url(#paint0_linear_111_1346)"
          />
          <path
            d="M20 16L36 27L52 16"
            stroke="url(#paint1_linear_111_1346)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_111_1346"
          x="0.599909"
          y="0.599878"
          width="70.8002"
          height="49.8001"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="9.2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.636861 0 0 0 0 0.359166 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_111_1346"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_111_1346"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_111_1346"
          x="13.7999"
          y="10.7999"
          width="44.4002"
          height="23.4001"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="2.6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.9625 0 0 0 0 0.595119 0 0 0 0 0.114698 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_111_1346"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_111_1346"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_111_1346"
          x1="36"
          y1="16"
          x2="36"
          y2="27"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF7F00" />
          <stop offset="1" stop-color="#FFAD5C" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_111_1346"
          x1="36"
          y1="16"
          x2="36"
          y2="27"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF7F00" />
          <stop offset="1" stop-color="#FFAD5C" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default DropdownIcon;
