import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const BASE_URL =
  "https://21d2-2001-448a-2020-f686-cd6-ed7e-6c0f-2cf.ap.ngrok.io";

export const getMenuList = createAsyncThunk("getMenuList", async () => {
  try {
    let { data } = await axios.get(`${BASE_URL}/menu`);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const orderSlicer = createSlice({
  name: "order",
  initialState: {
    loading: false,
    loadingScreen: false,
    menu: [],
    burger: [],
    basket: [],
    countBasket: 0,
    totalPrice: 0,
  },
  reducers: {
    addBasket: (state, data) => {
      const { name, price, imageUrl, id } = data.payload;
      state.countBasket = state.countBasket + 1;
      state.totalPrice = state.totalPrice + price;
      let findIndex = state.basket.findIndex((e) => e.id === id);
      if (findIndex === -1) {
        state.basket = [
          ...state.basket,
          { name, price, amount: 1, imageUrl, id },
        ];
      } else {
        state.basket[findIndex].amount++;
      }
    },
    reduceBasket: (state, data) => {
      const { price, id } = data.payload;
      state.countBasket = state.countBasket - 1;
      state.totalPrice = state.totalPrice - price;
      let index = state.basket.findIndex((e) => e.id === id);
      state.basket[index].amount--;
      if (state.basket[index].amount === 0) {
        state.basket = state.basket.filter((e) => e.id !== id);
      }
    },
    onLoading: (state) => {
      state.loadingScreen = true;
    },
    offLoading: (state) => {
      state.loadingScreen = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMenuList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMenuList.fulfilled, (state, data) => {
      let item = data.payload;
      state.burger = item.filter((e) => e.category === "burger");
      state.menu = item;
      state.loading = false;
    });
  },
});

const { actions, reducer } = orderSlicer;
export const { addBasket, reduceBasket, order, onLoading, offLoading } =
  actions;
export default reducer;
