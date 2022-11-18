import React from 'react';

interface ILogoCompanySvgProps {
  width?: string;
  height?: string;
}

const BurgerMenu = ({
  width = '20px',
  height = '13px',
}: ILogoCompanySvgProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="1.5" x2="20" y2="1.5" stroke="white" strokeWidth="2" />
      <line y1="11.5" x2="20" y2="11.5" stroke="white" strokeWidth="2" />
    </svg>
  );
};

export default BurgerMenu;
