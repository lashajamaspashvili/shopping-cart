import { useState, useEffect, useMemo } from "react";
import {
  SArrowContainer,
  SPagination,
  SPaginationBox,
  SProductsCards,
  SProductsList,
  SProductsListSortBy,
  SProductsListSortBySelect,
} from "./SProductsList.styled";
import { ProductCard } from "../ProductCard";
import { RootState } from "../../state/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../state/products/productsSlice";
import { useLocation } from "react-router-dom";
import { filterProducts, pagesArr } from "./utils/productsList.utils";

export function ProductsList() {
  const [sortBy, setSortBy] = useState<string>("desc");
  const [currentPage, setCurrentPage] = useState(1);

  const location = useLocation();

  const products = useSelector((state: RootState) => state?.products?.value);
  const categories = useSelector(
    (state: RootState) => state?.categories?.value
  );

  const pages = useMemo(() => pagesArr(products), [products]);

  const filteredProducts = useMemo(
    () => filterProducts(products, categories),
    [products, categories]
  );

  const favouriteProducts = products?.filter((product) => product?.favourite);

  const dispatch = useDispatch();

  useEffect(() => {
    if (categories) {
      setCurrentPage(1);
    }
  }, [categories]);

  useEffect(() => {
    if (location?.pathname?.includes("products")) {
      fetch(`https://fakestoreapi.com/products?sort=${sortBy}`)
        .then((res) => res.json())
        .then((data) => {
          dispatch(fetchProducts(data));
        });
    }
  }, [sortBy]);

  return (
    <SProductsList>
      {location?.pathname?.includes("products") ? (
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
      ) : null}
      {location?.pathname?.includes("favourites") ? (
        <SProductsCards>
          {favouriteProducts?.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
        </SProductsCards>
      ) : (
        <SProductsCards>
          {filteredProducts
            ?.slice((currentPage - 1) * 9, currentPage * 9)
            ?.map((product) => (
              <ProductCard key={product?.id} product={product} />
            ))}
        </SProductsCards>
      )}
      {filteredProducts?.length > 9 ? (
        <SPagination>
          <SArrowContainer
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            {"<"}
          </SArrowContainer>
          {pages?.map((page) => (
            <SPaginationBox
              key={page}
              active={page === currentPage}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </SPaginationBox>
          ))}
          <SArrowContainer
            disabled={currentPage === pages?.length}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            {">"}
          </SArrowContainer>
        </SPagination>
      ) : null}
    </SProductsList>
  );
}
