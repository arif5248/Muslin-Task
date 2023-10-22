import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./Slice/productsSlice";
import productDetailsSlice from "./Slice/productDetailsSlice";
const Store = configureStore({
  reducer: {
    products: productsReducer,
    productDetails: productDetailsSlice,
  },
});
export default Store;
