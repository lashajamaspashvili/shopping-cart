import { useState, useEffect } from "react";
import {
  SProductsCards,
  SProductsList,
  SProductsListSortBy,
  SProductsListSortBySelect,
} from "./SProductsList.styled";
import { ProductCard } from "../../../components/ProductCard";
import { RootState } from "../../../state/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../state/products/productsSlice";

export function ProductsList() {
  const [sortBy, setSortBy] = useState<string>("desc");

  const products = useSelector((state: RootState) => state?.products?.value);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?sort=${sortBy}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchProducts(data));
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
