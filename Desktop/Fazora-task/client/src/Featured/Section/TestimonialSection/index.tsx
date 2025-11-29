import { Star, Twitter } from "lucide-react";
import Heading from "../../Common/Heading";

const TestimonialSection = () => {
  return (
    <div className="max-w-[1320px] mx-auto px-4 my-[100px]">
      <div className="mb-10">
        <Heading
          tag={"Testimonials"}
          title="Hear from Our User"
          desc="Read how our users have achieved success"
        />
      </div>
      <div className="grid grid-cols-3 gap-5">
        <div className="box bg-white flex items-start flex-col gap-6 p-6 rounded-3xl">
          <div className="flex items-center px-2 py-1 rounded-[99px] gap-2 bg-[#F9F9F9] ">
            <Star size={22} fill="#FF8130" color="#FF8130" />
            <Star size={22} fill="#FF8130" color="#FF8130" />
            <Star size={22} fill="#FF8130" color="#FF8130" />
            <Star size={22} fill="#FF8130" color="#FF8130" />
          </div>
          <p className="text-[#6c7072] text-[16px] font-light leading-[22px]">
            Immerse yourself in a world where luxury meets sustainability,
            offering a seamless blend of comfort and innovation.
          </p>
          <ul className="flex items-center justify-between w-full">
            <li className="flex items-start flex-col text-[18px] leading-6 text-[#1c1e1f]">
              Henki
              <span className="text-[#6c7072] text-[14px] leading-[22px]">
                Buyer
              </span>
            </li>
            <li>
              <Twitter />
            </li>
          </ul>
        </div>
        <div className="box bg-white flex items-start flex-col gap-6 p-6 rounded-3xl">
          <div className="flex items-center px-2 py-1 rounded-[99px] gap-2 bg-[#F9F9F9] ">
            <Star size={22} fill="#FF8130" color="#FF8130" />
            <Star size={22} fill="#FF8130" color="#FF8130" />
            <Star size={22} fill="#FF8130" color="#FF8130" />
            <Star size={22} fill="#FF8130" color="#FF8130" />
          </div>
          <p className="text-[#6c7072] text-[16px] font-light leading-[22px]">
            Immerse yourself in a world where luxury meets sustainability,
            offering a seamless blend of comfort and innovation.
          </p>
          <ul className="flex items-center justify-between w-full">
            <li className="flex items-start flex-col text-[18px] leading-6 text-[#1c1e1f]">
              Henki
              <span className="text-[#6c7072] text-[14px] leading-[22px]">
                Buyer
              </span>
            </li>
            <li>
              <Twitter />
            </li>
          </ul>
        </div>
        <div className="box bg-white flex items-start flex-col gap-6 p-6 rounded-3xl">
          <div className="flex items-center px-2 py-1 rounded-[99px] gap-2 bg-[#F9F9F9] ">
            <Star size={22} fill="#FF8130" color="#FF8130" />
            <Star size={22} fill="#FF8130" color="#FF8130" />
            <Star size={22} fill="#FF8130" color="#FF8130" />
            <Star size={22} fill="#FF8130" color="#FF8130" />
          </div>
          <p className="text-[#6c7072] text-[16px] font-light leading-[22px]">
            Immerse yourself in a world where luxury meets sustainability,
            offering a seamless blend of comfort and innovation.
          </p>
          <ul className="flex items-center justify-between w-full">
            <li className="flex items-start flex-col text-[18px] leading-6 text-[#1c1e1f]">
              Henki
              <span className="text-[#6c7072] text-[14px] leading-[22px]">
                Buyer
              </span>
            </li>
            <li>
              <Twitter />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center mt-10">
        <div className="flex items-center px-2 py-1 rounded-[99px] gap-2 bg-white ">
          <Star size={20} fill="#313131" color="#313131" />
          <p className="text-[#6c7072] text-[14px] font-light leading-[22px]">
            1,500 happy clients
          </p>
          <Star size={20} fill="#313131" color="#313131" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
