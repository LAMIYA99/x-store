export type children = {
  children: ReactNode;
};

export type headingProps = {
  tag?: string | ReactNode;
  title?: string;
  desc?: string;
};
export type HousesCardProps = {
  name: string;
  image: string;
  konum: string;
  price: number;
  id?: number | string;
};
