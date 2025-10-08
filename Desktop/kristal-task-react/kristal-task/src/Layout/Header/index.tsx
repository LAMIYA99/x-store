import React from "react";
import navbar from "../../constant/navbar";

const Header = () => {
  const nav = navbar;
  console.log(nav);
  return (
    <header className="container mx-auto max-w-[1390px] sticky top-2 bg-white z-50 shadow-md rounded-[25px]">
      <nav className="grid grid-cols-12 py-[18px] px-[20px]  gap-[40px] ">
        <div className="col-span-7 flex items-center">
          <div className="w-[127px] h-[23.41px]">
            <img
              src="https://kristal.az/site/templates/assets/img/logo.svg"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="ml-[14px] flex items-center gap-[14px]">
            <select className="w-[47px] h-[31px] rounded-[9px] border border-[#EAEAEA] text-[13px] font-medium ">
              <option>AZ</option>
              <option>EN</option>
              <option>RU</option>
            </select>
            <button className="w-[162px] h-[50px] rounded-[25px] border border-[#EAEAEA] text-[#101238] text-[18px] font-medium flex items-center justify-center gap-[15px]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="btn_icon"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 0C0.895431 0 0 0.89543 0 2V5C0 6.10457 0.89543 7 2 7H7V2C7 0.895431 6.10457 0 5 0H2ZM2 16C0.895431 16 0 15.1046 0 14V11C0 9.89543 0.89543 9 2 9H7V14C7 15.1046 6.10457 16 5 16H2ZM16 2C16 0.89543 15.1046 0 14 0H11C9.89543 0 9 0.895431 9 2V7H14C15.1046 7 16 6.10457 16 5V2ZM14 16C15.1046 16 16 15.1046 16 14V11C16 9.89543 15.1046 9 14 9H9V14C9 15.1046 9.89543 16 11 16H14Z"
                  fill="#1F9DFF"
                ></path>
              </svg>
              Layihələr
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="6"
                viewBox="0 0 9 6"
                fill="none"
                className="icon-arrow-bottom"
              >
                <path
                  d="M1 1L4.38161 4.38161L7.76322 1"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <ul className="text-[18px]  font-medium leading-[1.5] text-[#212529]  flex items-center gap-5 ml-[15px]">
              {nav &&
                nav.map((item, idx) => (
                  <li key={idx}>
                    <a>{item?.name}</a>
                  </li>
                ))}
            </ul>
          </div>
          <div></div>
        </div>
        <div className="col-span-5">
          <div>
            <ul className="flex items-center gap-[15px]">
              <li className="w-[112px] h-[50px] rounded-[25px] hover:bg-[#DDECFF] duration-300 cursor-pointer bg-[#F6FAFF] text-[#5B8FFF] font-semibold gap-[7px] flex items-center justify-center">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.75 3.5H6.75L8.25 7.25L6.375 8.375C7.17822 10.0036 8.49635 11.3218 10.125 12.125L11.25 10.25L15 11.75V14.75C15 15.5784 14.3284 16.25 13.5 16.25C7.44574 15.8821 2.61792 11.0543 2.25 5C2.25 4.17157 2.92157 3.5 3.75 3.5"
                    stroke="#5B8FFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>{" "}
                * 1544
              </li>
              <li className="w-[50px] h-[50px] rounded-[50%] hover:bg-[#DDECFF] duration-300 cursor-pointer bg-[#F6FAFF] flex items-center justify-center">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="9"
                    cy="9"
                    r="8"
                    stroke="#5B8FFF"
                    strokeWidth="2"
                  ></circle>{" "}
                  <path
                    d="M14.5 15.5L19 20"
                    stroke="#5B8FFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </li>
              <li className="w-[50px] h-[50px] rounded-[50%] hover:bg-[#DDECFF] duration-300 cursor-pointer bg-[#F6FAFF] flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 20H17"
                    stroke="#5B8FFF"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M6 6L12 5L18 6"
                    stroke="#5B8FFF"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M12 3V20"
                    stroke="#5B8FFF"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M9 12L6 6L3 12C3 13.6569 4.34315 15 6 15C7.65685 15 9 13.6569 9 12"
                    stroke="#5B8FFF"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M21 12L18 6L15 12C15 13.6569 16.3431 15 18 15C19.6569 15 21 13.6569 21 12"
                    stroke="#5B8FFF"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </li>
              <li className="w-[50px] h-[50px] rounded-[50%] hover:bg-[#DDECFF] duration-300 cursor-pointer bg-[#F6FAFF] flex items-center justify-center">
                <svg
                  width="24"
                  height="17"
                  viewBox="0 0 24 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 16L4.02059 10.4694C1.76747 8.90776 1.13274 5.85471 2.57673 3.52443V3.52443C4.3254 0.70245 8.24806 0.248058 10.5955 2.59555L12 4L13.4045 2.59555C15.7519 0.248059 19.6746 0.702449 21.4233 3.52443V3.52443C22.8673 5.85471 22.2325 8.90776 19.9794 10.4694L12 16Z"
                    stroke="#5B8FFF"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </li>
              <li>
                <div className="bg-[#1F9DFF] hover:bg-[#1390EF] cursor-pointer duration-300 px-[22px] h-[50px] flex items-center justify-center gap-[8px] w-[230px] rounded-[25px]">
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="22"
                      viewBox="0 0 25 22"
                      fill="none"
                    >
                      <path
                        d="M23.9426 11.9667L14.859 20.9426"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                      <path
                        d="M12.0398 20.0907H3.75977L3.75977 9.18164"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                      <path
                        d="M1 11L12.0664 1L20.9572 9.18182"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <ellipse
                        cx="15.7209"
                        cy="13.7274"
                        rx="1.84"
                        ry="1.81818"
                        fill="white"
                      ></ellipse>
                      <ellipse
                        cx="22.1603"
                        cy="19.182"
                        rx="1.84"
                        ry="1.81818"
                        fill="white"
                      ></ellipse>
                    </svg>
                  </a>
                  <span className="text-[16px] font-medium text-white">
                    İpoteka kalkulyatoru
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
