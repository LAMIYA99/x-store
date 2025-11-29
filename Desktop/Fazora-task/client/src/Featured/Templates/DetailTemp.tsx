import DetailSection from "../Section/DetailSection";

type Props = {
  name?: string | null;
  houseId?: string | undefined;
  loading?: boolean;
  error?: any;
};

const DetailTemp = ({ name, houseId, loading, error }: Props) => {
  return (
    <div>
      <DetailSection name={name} houseId={houseId} loading={loading} error={error} />
    </div>
  );
};

export default DetailTemp;
