import { useEffect, useState } from "react";
import apiServices from "../../Api/axios";
import Products from "../Common/product";
import Loading from "../Common/loading";

const PopularProducts = () => {
  const api = new apiServices("http://localhost:3000/");
  const [loading,setloading]=useState(true);
  const [houses, sethouses] = useState([]);
  useEffect(() => {
    api.getData("houses").then((data) => {
      if (data) {
        console.log("succes");
        sethouses(data);
        setloading(false)
      } else console.error("texniki xeta");
    });
  }, []);
  if(loading){
    return <Loading className="flex py-50"/>
  }

  return (
    <div className="bg-[#F6FAFF] pb-[45px]">
      <div className="container mx-auto max-w-[1350px] ">
        <h2 className="text-[#2C2929] text-[35px] font-medium max-w-[800px] mb-[.5rem]">
          Sizi maraqlandıran layihələr
        </h2>
        <div className="grid grid-cols-3 gap-10">
            {houses&&houses.slice(0, 3).map((item,idx) => (
                <Products key={idx}
                image={item?.img}
                price={item?.price}
                location={item?.location}
                title={item?.name}
                />
            ))}
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
