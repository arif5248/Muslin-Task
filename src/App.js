import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/layout/Header/Header";
import Products from "./component/Products/Product";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/products" Component={Products} />
      </Routes>
    </Router>
  );
}

export default App;
