import React from "react";

const NewsCart = ({ image, title, desc }) => {
  return (
    <div className="box rounded-[25px] overflow-hidden ">
      <div className="boxImg">
        <img src={image} alt="" className="w-full h-[380px] object-cover" />
      </div>
      <div className="body p-[30px] bg-white">
        <h2 className=" flex items-center w-[600px] text-[#2C2929] text-[25px] font-medium">
          {title}
        </h2>
        <p className="max-w-[586px] text-[#2C2929] text-[18px] font-normal leading-[26px] mt-[13px] opacity-[0.5]">
          {desc}
        </p>
        <ul className="mt-[35px] flex items-center justify-between">
          <li>
            <button className="flex items-center text-[20px] font-medium gap-[20px] text-[#1F9DFF]">
              Ətraflı
              <img
                src="	https://kristal.az/site/templates/assets/svg/arrow-right-btn2.svg"
                alt=""
              />
            </button>
          </li>
          <li className="text-[#2C2929] text-[18px] font-normal leading-[26px] opacity-[0.5]">
            29 Aug 2025
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NewsCart;