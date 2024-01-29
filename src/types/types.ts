export type ProductsType = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
  favourite?: boolean;
};

export type CartType = {
  id: number;
  userId: number;
  date: string;
  products: {
    productId: number;
    quantity: number;
  }[];
};

export type ModifiedCartItem = {
  product: ProductsType;
  qty: number;
};
