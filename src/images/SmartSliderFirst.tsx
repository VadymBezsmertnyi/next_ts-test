import React from 'react';

interface ILogoCompanySvgProps {
  width?: string;
  height?: string;
}

const SmartSliderFirst = ({
  width = '17px',
  height = '25px',
}: ILogoCompanySvgProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.13001 1.82482H4.36125V23.7378H3.13001V1.82482ZM12.5349 1.82482H13.7661V23.7378H12.5349V1.82482ZM10.7993 0V0.532238H9.13786V0H7.78796V0.532238H6.12652V0H4.77661V0.532238H0V1.80961H1.06806V23.7226H0V25H17V23.7226H15.8874V1.82482H17V0.547446H12.1789V0.0152077H10.7993V0Z"
        fill="white"
      />
    </svg>
  );
};

export default SmartSliderFirst;
