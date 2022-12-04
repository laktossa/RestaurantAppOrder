import { configureStore } from "@reduxjs/toolkit";
import reducerOrder from "./slicerOrder";

export default configureStore({
  reducer: {
    order: reducerOrder,
  },
});
