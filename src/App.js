import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home/home";
import Header from "./component/layout/Header/Header";
import Products from "./component/Products/Product";
import ProductDetails from "./component/Products/productDetails";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/products" Component={Products} />
        <Route exact path="/product/:id" Component={ProductDetails} />
        <Route exact path="/products/product/:id" Component={ProductDetails} />
      </Routes>
    </Router>
  );
}

export default App;
