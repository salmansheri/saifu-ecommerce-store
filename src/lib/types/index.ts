export type CategoryType = {
  id: string;
  name: string;
};

export type ColorType = {
  id: string;
  name: string;
  value: string;
};
export type SizeType = {
  id: string;
  name: string;
  value: string;
};

export type GenderType = {
  id: string;
  name: string;
};

export type ImageType = {
  id: string;
  url: string;
};

export type StoreType = {
  id: string;
  name: string;
};

export type ProductType = {
  id: string;
  name: string;
  price: number;
  isFeatured: false;
  isArchieved: false;
  gender: GenderType;
  category: CategoryType;
  store: StoreType;
  size: SizeType;
  color: ColorType;
  images: ImageType[];
};
