import { configureStore } from "@reduxjs/toolkit";
import comment from "./slice/commentSlice";
import like from "./slice/likeSlice";

const store = configureStore({
  reducer: { comment, like },
});

export default store;
