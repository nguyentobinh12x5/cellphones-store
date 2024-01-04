import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "../features/Popupslice";
import userReducer from "../features/UseSlice";
import cartReducer from "../features/CartSlice";
import dataReducer from "../features/FetchDataSlice";
export const store = configureStore({
  reducer: {
    Popup: popupReducer,
    user: userReducer,
    cart: cartReducer,
    data: dataReducer,
  },
});
