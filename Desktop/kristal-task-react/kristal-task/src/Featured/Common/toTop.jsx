import React, { useEffect, useState } from "react";

const ToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-5 right-5 z-[9999]">
      <button
        onClick={scrollToTop}
        className={`transition-opacity duration-500 ${
          visible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <img
          className="w-[60px] h-[60px]"
          src="https://icons.veryicon.com/png/o/miscellaneous/monochromatic-surface-icon-library/return-to-the-top-14.png"
          alt="Scroll to top"
        />
      </button>
    </div>
  );
};

export default ToTop;
