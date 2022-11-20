import React from 'react';
import { ISvgProps } from 'types/main';

const SmartSecondSlider = ({ width = '45px', height = '45px' }: ISvgProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="22.5" cy="22.5" r="22.5" fill="#0090FF" />
      <path
        d="M17.13 11.8248H18.3612V33.7378H17.13V11.8248ZM26.5349 11.8248H27.7661V33.7378H26.5349V11.8248ZM24.7993 10V10.5322H23.1379V10H21.788V10.5322H20.1265V10H18.7766V10.5322H14V11.8096H15.0681V33.7226H14V35H31V33.7226H29.8874V11.8248H31V10.5474H26.1789V10.0152H24.7993V10Z"
        fill="white"
      />
    </svg>
  );
};

export default SmartSecondSlider;
