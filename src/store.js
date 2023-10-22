import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./Slice/productsSlice";
const Store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
export default Store;
