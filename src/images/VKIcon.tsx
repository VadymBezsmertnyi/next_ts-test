import React from 'react';
import { ISvgProps } from 'types/main';

const PhoneSvg = ({ width = '26px', height = '14px' }: ISvgProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 26 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.9568 0.73659H20.7849C20.6146 0.736589 20.4475 0.777271 20.3014 0.854304C20.1553 0.931338 20.0356 1.04184 19.9551 1.17406C19.9551 1.17406 18.2912 3.87435 17.7567 4.78386C16.3189 7.23055 15.3878 6.46245 15.3878 5.32692V1.41159C15.3878 1.08442 15.2403 0.770639 14.9778 0.53929C14.7152 0.307941 14.3591 0.17797 13.9879 0.17797H10.8512C10.424 0.149983 9.99582 0.218691 9.60727 0.377568C9.21872 0.536445 8.88271 0.780216 8.63116 1.08573C8.63116 1.08573 10.2239 0.858794 10.2239 2.74995C10.2239 3.2189 10.2513 4.56795 10.2763 5.69946C10.281 5.8662 10.2276 6.0302 10.1231 6.16931C10.0187 6.30843 9.86837 6.41596 9.6924 6.47739C9.51642 6.53883 9.3233 6.5512 9.13909 6.51284C8.95489 6.47448 8.78848 6.38724 8.66232 6.2629C7.37843 4.68936 6.31494 2.98492 5.49496 1.18661C5.42454 1.05209 5.31181 0.93819 5.17014 0.858424C5.02847 0.778658 4.86381 0.736375 4.69569 0.73659C3.79095 0.73659 1.98047 0.73659 0.90529 0.73659C0.801029 0.735965 0.698155 0.757654 0.605505 0.799793C0.512855 0.841933 0.433199 0.903263 0.373381 0.978515C0.313562 1.05377 0.27537 1.14069 0.262086 1.23182C0.248801 1.32295 0.26082 1.41556 0.297112 1.50169C1.44806 4.28368 6.40598 13.0262 12.0649 13.0262H14.4468C14.6964 13.0262 14.9357 12.9389 15.1122 12.7834C15.2887 12.6279 15.3878 12.4169 15.3878 12.197V10.9296C15.3878 10.7707 15.4406 10.6151 15.5396 10.4823C15.6387 10.3494 15.7797 10.2449 15.9453 10.1818C16.1109 10.1187 16.2939 10.0996 16.4716 10.127C16.6493 10.1544 16.8141 10.227 16.9456 10.3358L19.7965 12.6962C20.0525 12.9082 20.3906 13.0262 20.742 13.0262H24.4857C26.2913 13.0262 26.2913 11.9221 25.3069 11.0678C24.614 10.4665 22.114 8.14437 22.114 8.14437C21.8999 7.94893 21.7722 7.69244 21.754 7.42127C21.7358 7.1501 21.8282 6.88213 22.0146 6.66578C22.8227 5.72869 24.1445 4.19473 24.705 3.53759C25.4712 2.63939 26.8579 0.73659 24.9568 0.73659Z"
        fill="white"
      />
    </svg>
  );
};

export default PhoneSvg;
