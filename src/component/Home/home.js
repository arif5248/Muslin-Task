import React, { Fragment, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "./home.css";
import carouselImage1 from "../../images/couch.png";
import ProductCard from "../Products/productCard";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../loader/loader";
import { fetchProducts } from "../../Slice/productsSlice";

function Home() {
  const dispatch = useDispatch();
  const { isLoading, products, error } = useSelector((state) => state.products);

  useEffect(() => {
    const limit = 8;
    if (error) {
      console.error();
    }
    dispatch(fetchProducts(limit));
  }, [dispatch, error]);

  return (
    <Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="HeroSection">
            <div className="container hero">
              <div className="title-section col-lg-5">
                <h1>Your Amaizing Products...</h1>
                <p>
                  Welcome to the <span>MyTask</span>platform, where you get your
                  all desired products and do easy your life
                </p>
                <button className="btn btn-primary">Shop Now</button>
              </div>
              <div className="carousel-section col-lg-7">
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={carouselImage1}
                      alt="Third slide"
                    />
                    <Carousel.Caption>
                      {/* <h3>Slide 3</h3>
                  <p>This is the third slide.</p> */}
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={carouselImage1}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      {/* <h3>Slide 1</h3>
                  <p>This is the first slide.</p> */}
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={carouselImage1}
                      alt="Second slide"
                    />
                    <Carousel.Caption>
                      {/* <h3>Slide 2</h3>
                  <p>This is the second slide.</p> */}
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>

          <div className="container product-section" id="container">
            {products &&
              products.map((product, index) => {
                return <ProductCard key={index} product={product} />;
              })}
          </div>

          {/* =========product section========== */}
          {/* <div class="container">
        <div class="row">
          <div class="col-md-3">
            <p>Column 1</p>
          </div>
          <div class="col-md-3">
            <p>Column 2</p>
          </div>
          <div class="col-md-3">
            <p>Column 3</p>
          </div>
          <div class="col-md-3">
            <p>Column 4</p>
          </div>
        </div>
      </div> */}
        </Fragment>
      )}
    </Fragment>
  );
}

export default Home;
