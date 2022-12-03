import { createSlice } from "@reduxjs/toolkit";

const orderSlicer = createSlice({
  name: "order",
  initialState: {
    loading: false,
    basket: [],
    countBasket: 0,
    totalPrice: 0,
  },
  reducers: {
    addBasket: (state, data) => {
      const { name, price } = data.payload;
      state.countBasket = state.countBasket + 1;
      state.totalPrice = state.totalPrice + price;
      let findIndex = state.basket.findIndex((e) => e.name === name);
      if (findIndex === -1) {
        state.basket = [...state.basket, { name, price, amount: 1 }];
        console.log(state.basket);
      } else {
        state.basket[findIndex].amount++;
        console.log(state.basket);
      }
    },
    reduceBasket: (state, data) => {
      const { name, price } = data.payload;
      state.countBasket = state.countBasket - 1;
      state.totalPrice = state.totalPrice - price;
      let index = state.basket.findIndex((e) => e.name === name);
      state.basket[index].amount--;
      if (state.basket[index].amount === 0) {
        state.basket = state.basket.filter((e) => e.name !== name);
      }
      console.log(state.basket);
    },
  },
});

const { actions, reducer } = orderSlicer;
export const { addBasket, reduceBasket, order } = actions;
export default reducer;
