import { useQuery } from "@tanstack/react-query";
import Heading from "../../Common/Heading";
import HousesCard from "../../Components/Houses/HousesCard";
import ApiServices from "../../../Services/api";

const PremiumSection = () => {
  const api = new ApiServices("http://localhost:1337/api");
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: () => api.getData("products?populate=*"),
  });

  const services = [
    {
      id: 1,
      num: "01",
      title: "Search & Select",
      desc: " Pick destination & dates",
      tag: "  Browse available hotels.",
    },
    {
      id: 2,
      num: "02",
      title: "Choose Room",
      desc: "Choose hotel & room",
      tag: "pick your preferred option.",
    },
    {
      id: 3,
      num: "03",
      title: "Enter Details",
      desc: "Add guest info",
      tag: "confirm booking summary.",
    },
    {
      id: 4,
      num: "04",
      title: "Confirm",
      desc: "Pay & get confirmation",
      tag: "Receipt & details",
    },
  ];
  return (
    <div className="max-w-[1320px] mx-auto px-4 ">
      <Heading
        tag="Premium Estates"
        title="Discover homes designed to inspire."
        desc="Luxury residences where design meets comfort"
      />
      <div className="grid grid-cols-2 gap-8 mt-11">
        {data?.data?.map((item: any) => {
          const attrs = item?.attributes ?? item;
          const imgPath =
            attrs?.image?.data?.attributes?.url ?? attrs?.image?.url ?? attrs?.image ?? "";
          const imgSrc = imgPath ? `http://localhost:1337${imgPath}` : "";

          return (
            <HousesCard
              key={item?.id ?? attrs?.id}
              id={item?.id ?? attrs?.id}
              name={attrs?.name}
              konum={attrs?.Konum}
              price={attrs?.price}
              image={imgSrc}
            />
          );
        })}
      </div>
      <div className="grid grid-cols-4 my-[100px] gap-5">
        {services &&
          services?.map((item) => (
            <div
              key={item?.id}
              className="box p-6 flex items-center justify-center flex-col bg-white rounded-3xl gap-6"
            >
              <span className="bg-[#313536] rounded-[99px] w-11 h-11 p-2 flex items-center justify-center border-[6px] border-[#f9f9f9] text-white">
                {item?.num}
              </span>
              <div className="flex items-center justify-center flex-col gap-2.5">
                <h2 className="text-[#1c1e1f] font-normal text-[18px] leading-[26px]">
                  {item?.title}
                </h2>
                <h3 className="text-[16px] text-[#6c7072] leading-[22px] font-light">
                  {item?.desc}
                </h3>
              </div>
              <button className="bg-[#F9F9F9] py-2 px-3.5 border border-[#f9f9f9] rounded-[26px] text-[14px] text-[#6c7072] font-light leading-[100%]">
                {item?.tag}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PremiumSection;
