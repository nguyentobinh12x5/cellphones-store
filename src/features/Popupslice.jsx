import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Popup: false,
};
export const popupSlice = createSlice({
  name: "Popup",
  initialState,
  reducers: {
    showPopup: (state) => {
      state.Popup = true;
    },
    hidePopup: (state) => {
      state.Popup = false;
    },
  },
});

export const { showPopup, hidePopup } = popupSlice.actions;
export const selectPopup = (state) => state.Popup.Popup;

export default popupSlice.reducer;
