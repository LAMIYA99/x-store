import React from "react";

const Loading = ({ className = "hidden" }) => {
  return (
    <div className="w-full  h-full flex items-center justify-center z-50 ">
      <div className={className}>
        <img
          className="w-[50px] h-[50px]"
          src="https://cdn.pixabay.com/animation/2023/10/10/13/27/13-27-45-28_512.gif"
          alt=""
        />
      </div>
    </div>
  );
};

export default Loading;
