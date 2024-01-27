import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import {
  SSimilarProductsCards,
  SSimilarProducts,
  SSimilarProductsTitle,
} from "./SSimilarProducts.styled";
import { ProductsType } from "../../Products/ProductsList/ProductsList";
import { ProductCard } from "../../../components/ProductCard";

export function SimilarProducts() {
  const [products, setProducts] = useState<ProductsType[]>([]);

  const { id } = useParams();

  const category = useMemo(
    () => products?.find((product) => String(product?.id) === id)?.category,
    [products, id]
  );

  const filteredProducts = useMemo(
    () => products?.filter((product) => product?.category === category),
    [products, category]
  );

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  console.log(category);

  return (
    <SSimilarProducts>
      <SSimilarProductsTitle>Similar products</SSimilarProductsTitle>
      <SSimilarProductsCards>
        {filteredProducts?.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </SSimilarProductsCards>
    </SSimilarProducts>
  );
}
