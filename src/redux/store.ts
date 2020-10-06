import { configureStore } from '@reduxjs/toolkit';
import { shopListSlice } from '../features/shopping/shopList';
import { productsSlice } from './../features/shopping/products';

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    shopList: shopListSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
