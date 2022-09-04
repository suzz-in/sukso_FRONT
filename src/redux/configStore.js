import { configureStore } from "@reduxjs/toolkit";

import comment from "./slice/commentSlice";

const store = configureStore({
  reducer: { comment },
});

export default store;
