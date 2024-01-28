import { useState, useEffect } from "react";
import {
  SSimilarProductsCards,
  SSimilarProducts,
  SSimilarProductsTitle,
} from "./SSimilarProducts.styled";
import { ProductCard } from "../../../components/ProductCard";
import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { ProductsType } from "../../../types/types";

export function SimilarProducts() {
  const [products, setProducts] = useState<ProductsType[]>([]);

  const product = useSelector(
    (state: RootState) => state?.currentProduct?.value
  );

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${product?.category}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [product?.category]);

  return (
    <SSimilarProducts>
      <SSimilarProductsTitle>Similar products</SSimilarProductsTitle>
      <SSimilarProductsCards>
        {products?.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </SSimilarProductsCards>
    </SSimilarProducts>
  );
}
