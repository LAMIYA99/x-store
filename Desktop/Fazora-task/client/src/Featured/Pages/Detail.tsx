import DetailTemp from "../Templates/DetailTemp";
import { useQuery } from "@tanstack/react-query";
import ApiServices from "../../Services/api";

const Detail = () => {
  const api = new ApiServices("http://localhost:1337/api");

  const houseId =
    typeof window !== "undefined"
      ? window.location.pathname.split("/").pop()
      : undefined;

  const { data, isLoading, error } = useQuery({
    queryKey: ["products-name", houseId],
    queryFn: () => api.getData(`products?filters[id][$eq]=${houseId}`),
    enabled: !!houseId,
  });

  const name = data?.data?.[0]?.name || null;

  return (
    <div>
      <DetailTemp name={name} houseId={houseId} loading={isLoading} error={error} />
    </div>
  );
};

export default Detail;
