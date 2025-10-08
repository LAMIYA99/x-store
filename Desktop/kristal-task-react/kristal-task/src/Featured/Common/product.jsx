import React from "react";

const Products = ({ image, title, location, price }) => {
  return (
    <div className="box">
      <div className="boxImg">
        <img src={image} alt="" />
      </div>
      <div className="boxBody px-[35px] py-[25px] bg-white rounded-b-[25px]">
        <h2 className="text-[25px] text-[#2C2929] font-medium">{title}</h2>
        <h3 className="flex items-center gap-1">
          <img
            src="https://kristal.az/site/assets/files/3781/park_404x_1.png"
            alt=""
            className="w-[20px] h-[20px] object-contain"
          />
          <span className="opacity-[0.6]">{location}</span>
        </h3>
        <ul className="mt-[28px] flex items-start justify-between">
          <li className="w-[150px] h-[50px] text-[#1F9DFF] text-[14px] font-normal rounded-[10px] bg-[#F6FAFF] px-[10px] flex items-center justify-center">
            92.9 m² - 260.2 m²
          </li>
          <li className="text-[#2C2929] text-[25px] font-medium flex items-end flex-col">
            {price} $
            <span className="text-[#2C2929] text-[16px] font-normal opacity-[0.6]">
              başlayaraq
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Products;