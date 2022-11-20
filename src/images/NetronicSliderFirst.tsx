import React from 'react';
import { ISvgProps } from 'types/main';

const NetronicSliderFirst = ({
  width = '45px',
  height = '45px',
}: ISvgProps) => {
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
        d="M36.6246 24.6424C36.6246 24.7803 36.5063 24.8986 36.3683 24.8986H36.0333C35.8953 24.8986 35.777 24.7803 35.777 24.6424V21.9618C35.777 21.8238 35.8953 21.7055 36.0333 21.7055H36.3683C36.5063 21.7055 36.6246 21.8238 36.6246 21.9618V24.6424ZM22.0192 22.8093C16.9734 22.8093 12.2429 22.356 9.70031 21.607L9.77915 21.3113C12.3021 22.0406 16.9734 22.5137 22.0192 22.5137C27.0454 22.5137 31.7364 22.0603 34.2593 21.3113L34.3382 21.607C31.7955 22.3363 27.0651 22.8093 22.0192 22.8093ZM24.759 26.4557C24.759 27.0273 24.2859 27.5004 23.7143 27.5004H20.3044C19.7328 27.5004 19.2598 27.0273 19.2598 26.4557V24.938C19.2598 24.3664 19.7328 23.8934 20.3044 23.8934H23.7143C24.2859 23.8934 24.759 24.3664 24.759 24.938V26.4557ZM7.41391 24.6424V21.9618C7.41391 21.8238 7.53217 21.7055 7.67014 21.7055H7.98551C8.12349 21.7055 8.24175 21.8238 8.24175 21.9618V24.6424C8.24175 24.7803 8.12349 24.8986 7.98551 24.8986H7.67014C7.53217 24.8986 7.41391 24.7803 7.41391 24.6424ZM36.3486 21.2916H36.1712V20.3455C35.9938 19.0446 29.726 18 21.9995 18C14.2731 18 8.00523 19.0446 7.82783 20.3455V21.2916H7.65044C7.29565 21.2916 7 21.5873 7 21.9421V24.6227C7 24.9972 7.29565 25.2731 7.65044 25.2731H7.82783V26.0615C7.82783 27.3821 14.1745 28.4662 21.9995 28.4662C29.8245 28.4662 36.1712 27.3821 36.1712 26.0615V25.2731H36.3486C36.7231 25.2731 36.9991 24.9774 36.9991 24.6227V21.9421C37.0188 21.5873 36.7231 21.2916 36.3486 21.2916Z"
        fill="white"
      />
    </svg>
  );
};

export default NetronicSliderFirst;
