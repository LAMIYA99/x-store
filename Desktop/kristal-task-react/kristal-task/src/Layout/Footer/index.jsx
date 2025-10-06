import React from "react";
import { Facebook, Instagram, Youtube, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <footer className="relative bg-[#FFFFFF] pt-16 pb-8 mt-24 bg-[url('https://kristal.az/site/templates/assets/img/footer-bg.png')] bg-no-repeat bg-bottom bg-cover">
        <div className="max-w-[1340px] mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-20">
          <div className="col-span-1 md:col-span-1">
            <img
              src="https://kristal.az/site/templates/assets/img/logo.svg"
              alt="Kristal Logo"
              className="h-[24px] w-[127px] mb-6"
            />
          </div>

          <div>
            <h3 className="font-semibold text-[16px] text-[#2D2929] mb-2.5">
              Davam edən layihələr
            </h3>
            <ul className="flex flex-col gap-1.5 text-[#959494] text-[14px]">
              <li>Kristal Towers</li>
              <li>City Garden Nərimanov</li>
              <li>Park Yasamal 2</li>
              <li>Highland Residence</li>
              <li>Biləcəri yaşayış kompleksi</li>
              <li>Sahil Park Sumqayıt 4</li>
              <li>Central Park</li>
              <li>Yeni Sumqayıt</li>
              <li>Sky Home</li>
              <li>Park Əcəmi</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[16px] text-[#2D2929] mb-2.5">
              Təhvil verilən layihələr
            </h3>
            <ul className="flex flex-col gap-1.5 text-[#959494] text-[14px">
              <li>Merida Premium</li>
              <li>Royal Residence</li>
              <li>Javahir Residence</li>
              <li>Kristal Bayil</li>
              <li>İnqilab Residence</li>
              <li>Sahil Park Sumqayıt 1</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[16px] text-[#2D2929] mb-2.5">
              Kristal
            </h3>
            <ul className="flex flex-col gap-1.5 text-[#959494] text-[14px">
              <li>Haqqımızda</li>
              <li>Lahiyələr</li>
              <li>Xəbərlər</li>
              <li>Karyera</li>
              <li>Əlaqə</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[16px] text-[#2D2929] mb-2.5">
              Kalkulyator
            </h3>
            <ul className="flex flex-col gap-1.5 text-[#959494] text-[14px">
              <li>İpoteka kalkulyatoru</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 pb-4 px-4">
          <div className="max-w-[1340px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-sm text-[#6B7280]">
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-2">
              <p>© 2025 Kristal. All rights reserved.</p>
              <span className="mx-2 hidden md:inline">|</span>
              <span>Site by</span>
              <img
                src="https://kristal.az/site/templates/assets/svg/jis.svg"
                alt="Jeykhun Imanov Studio"
                className="h-5"
              />
              <span className="ml-2">Jeykhun Imanov Studio</span>
              <span className="ml-4 cursor-pointer hover:text-[#2563EB] transition">
                Məxfilik siyasəti
              </span>
            </div>

            <div className="flex text-[18px] justify-center md:justify-end gap-3 text-[#209DFF] mt-3 md:mt-0">
              <a
                href="#"
                className="hover:opacity-80 flex items-center gap-2 text-[#209DFF]"
              >
                <img
                  src="https://kristal.az/site/templates/assets/svg/phone.svg"
                  alt="phone"
                  className="w-5 h-5"
                />
                <span>*1544</span>
              </a>

              <a
                href="#"
                className="w-[50px] h-[50px] flex items-center justify-center rounded-full  bg-[#F6FAFF]    transition"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="w-[50px] h-[50px] flex items-center justify-center rounded-full  bg-[#F6FAFF]    transition"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="w-[50px] h-[50px] flex items-center justify-center rounded-full  bg-[#F6FAFF]    transition"
              >
                <Youtube className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="w-[50px] h-[50px] flex items-center justify-center rounded-full  bg-[#F6FAFF]    transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="w-[50px] h-[50px] flex items-center justify-center rounded-full  bg-[#F6FAFF]    transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
