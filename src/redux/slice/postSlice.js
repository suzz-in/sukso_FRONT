import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPostList = createAsyncThunk("get/postList", async () => {
  const { data } = await axios.get("http://localhost:3001/post");
  //15.165.76.244/
  return data;
});

const initialState = { post: [] };

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPostList.fulfilled, (state, action) => {
      console.log(state.post, action.payload[0].data);
      state.post = action.payload[0].data;
    });
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;
