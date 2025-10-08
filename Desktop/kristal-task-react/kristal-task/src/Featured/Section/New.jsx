import { useEffect, useState } from "react";
import apiServices from "../../Api/axios";
import NewsCart from "../Common/newsCart";
import Loading from "../Common/loading";




const News = () => {
  const api = new apiServices("http://localhost:3000/");
  const [loading,setloading]=useState(true);

  const [product, setProduct] = useState([]);

  useEffect(() => {
    api.getData("product").then((data) => {
      if (data) {
        setProduct(data);
        setloading(false)
      }
    });
  }, []);
  if(loading){
    return <Loading className="flex py-30"/>
  }

  return (
    <div className="">
      <div className="text-center mb-[120px] mt-[85px] container mx-auto max-w-[1350px]">
        <h2 className="text-[#2C2929] text-[55px] font-semibold"> Xəbərlər </h2>
      </div>
      <div className="bg-[#F6FAFF]">
        <div className="container mx-auto max-w-[1350px]">
          <div className="grid grid-cols-2 transform -translate-y-10 gap-11">
            {product &&
              product.map((item, idx) => (
                <NewsCart
                  key={idx}
                  image={item?.img}
                  title={item?.name}
                  desc={item?.desc}
                
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
