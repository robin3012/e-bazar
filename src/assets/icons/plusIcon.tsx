import { FC } from "react";

interface PlusIconProps {}

const PlusIcon: FC<PlusIconProps> = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <g clipPath="url(#clip0_4_227)">
        <path
          d="M10 20C4.48578 20 0 15.5142 0 10C0 4.48578 4.48578 0 10 0C15.5142 0 20 4.48578 20 10C20 15.5142 15.5142 20 10 20ZM10 1.25C5.17502 1.25 1.25 5.17502 1.25 10C1.25 14.825 5.17502 18.75 10 18.75C14.825 18.75 18.75 14.825 18.75 10C18.75 5.17502 14.825 1.25 10 1.25Z"
          fill="#2F80ED"
        />
        <path
          d="M14.375 10.625H5.625C5.28 10.625 5 10.345 5 10C5 9.655 5.28 9.375 5.625 9.375H14.375C14.72 9.375 15 9.655 15 10C15 10.345 14.72 10.625 14.375 10.625Z"
          fill="#2F80ED"
        />
        <path
          d="M10 15C9.655 15 9.375 14.72 9.375 14.375V5.625C9.375 5.28 9.655 5 10 5C10.345 5 10.625 5.28 10.625 5.625V14.375C10.625 14.72 10.345 15 10 15Z"
          fill="#2F80ED"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_227">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PlusIcon;
