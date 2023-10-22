import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Slice/productsSlice";
import ProductCard from "./productCard";
import "./product.css";
import Loader from "../loader/loader";
function Products() {
  const dispatch = useDispatch();
  const { isLoading, products, error } = useSelector((state) => state.products);
  useEffect(() => {
    if (error) {
      console.error();
    }
    dispatch(fetchProducts());
  }, [dispatch, error]);

  return (
    <Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <Fragment>
          <h2 className="productsHeading">Products</h2>
          <div className="container">
            <div className="products">
              {products &&
                products.map((product, index) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default Products;
