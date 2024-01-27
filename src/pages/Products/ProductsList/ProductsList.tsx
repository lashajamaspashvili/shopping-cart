import { useState, useEffect } from "react";
import {
  SProductsCards,
  SProductsList,
  SProductsListSortBy,
  SProductsListSortBySelect,
} from "./SProductsList.styled";
import { ProductCard } from "../../../components/ProductCard";

// To Do - global type for products

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
};

export function ProductsList() {
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [sortBy, setSortBy] = useState<string>("desc");

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?sort=${sortBy}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [sortBy]);

  return (
    <SProductsList>
      <SProductsListSortBy>
        <span>Sort by:</span>
        <SProductsListSortBySelect
          defaultValue={"desc"}
          onChange={(e) => setSortBy(e?.target?.value)}
        >
          <option value="desc">New Arrivals</option>
          <option value="asc">Olders</option>
        </SProductsListSortBySelect>
      </SProductsListSortBy>
      <SProductsCards>
        {products?.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </SProductsCards>
      {/* To Do - Pagination */}
    </SProductsList>
  );
}
