import React from 'react';
import { ISvgProps } from 'types/main';

const PhoneSvg = ({ width = '27px', height = '26px' }: ISvgProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 27 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="13.7849" cy="13" r="13" fill="white" />
      <g clipPath="url(#clip0_1_149)">
        <path
          d="M19.7924 15.535C18.8699 15.535 17.9774 15.385 17.1449 15.115C16.8824 15.025 16.5899 15.0925 16.3874 15.295L15.2099 16.7725C13.0874 15.76 11.0999 13.8475 10.0424 11.65L11.5049 10.405C11.7074 10.195 11.7674 9.9025 11.6849 9.64C11.4074 8.8075 11.2649 7.915 11.2649 6.9925C11.2649 6.5875 10.9274 6.25 10.5224 6.25H7.92741C7.52241 6.25 7.03491 6.43 7.03491 6.9925C7.03491 13.96 12.8324 19.75 19.7924 19.75C20.3249 19.75 20.5349 19.2775 20.5349 18.865V16.2775C20.5349 15.8725 20.1974 15.535 19.7924 15.535Z"
          fill="#070707"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_149">
          <rect
            width="18"
            height="18"
            fill="white"
            transform="translate(4.78491 4)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PhoneSvg;
