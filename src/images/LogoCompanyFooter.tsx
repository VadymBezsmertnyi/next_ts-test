import React from 'react';

interface ILogoCompanyFooterProps {
  width?: string;
  height?: string;
}

const LogoCompanyFooter = ({
  width = '67px',
  height = '67px',
}: ILogoCompanyFooterProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 67 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M33.7278 67C52.1035 67 67 52.1035 67 33.7278C67 28.9275 65.9834 24.3646 64.1538 20.2427L54.3883 31.3293C55.3116 39.3167 51.5307 47.461 44.1242 51.7372C36.7154 56.0146 27.7686 55.215 21.3125 50.4178L6.84106 53.3313C12.8927 61.6171 22.6816 67 33.7278 67ZM3.30215 47.2139C1.47229 43.0917 0.455566 38.5285 0.455566 33.7278C0.455566 15.352 15.352 0.455566 33.7278 0.455566C44.7724 0.455566 54.56 5.83693 60.6119 14.1207L46.134 17.0333C39.6785 12.2406 30.7353 11.443 23.329 15.7189C15.9207 19.9961 12.1398 28.1434 13.0656 36.1327L3.30215 47.2139Z"
        fill="white"
      />
    </svg>
  );
};

export default LogoCompanyFooter;
