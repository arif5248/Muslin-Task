import React, { Fragment, useEffect } from "react";
import "./productDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { Carousel } from "react-bootstrap";
import { fetchProductDetails } from "../../Slice/productDetailsSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { product, isloading, error } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    if (error) {
      console.error(error);
    }

    dispatch(fetchProductDetails(id));
  }, [dispatch, id, error]);

  const options = {
    edit: false,
    color: "rgba(20, 20, 20, 0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: product?.rating?.rate || 0,
    isHalf: true,
  };

  return (
    <Fragment>
      <div key={`${product.id}`} className="productDetails">
        <div>
          <Carousel className="carouselImage">
            <Carousel.Item>
              <img
                className="carouselImage d-block w-100"
                key={product.id}
                src={product.image}
                alt={product.title}
              />
            </Carousel.Item>
          </Carousel>
        </div>

        <div>
          <div className="detailsBlock-1">
            <h2>{product.title}</h2>
            <p>Product # {product.id}</p>
          </div>

          <div className="detailsBlock-2">
            <ReactStars key={product.id} {...options} />
            <span>({product.numOfReviews} Reviews)</span>
          </div>

          <div className="detailsBlock-3">
            <h1>{`৳ ${product.price}`}</h1>
            <div className="detailsBlock-3-1">
              <div className="detailsBlock-3-1-1">
                <button>-</button>
                <input value="1" type="number" />
                <button>+</button>
              </div>
              <button>Add to Cart</button>
            </div>

            <p>
              Status:{" "}
              <b className={product.stock < 1 ? "redColor" : "greenColor"}>
                {product.stock < 1 ? "Out of Stock" : "InStock"}
              </b>
            </p>
          </div>

          <div className="detailsBlock-4">
            Description : <p>{product.description}</p>
          </div>
          <button className="submitReview">Submit Review</button>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetails;
