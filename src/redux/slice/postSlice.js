import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPostList = createAsyncThunk("get/postList", async () => {
  const { data } = await axios.get("http://localhost:3001/postList");
  return data;
});

const initialState = { postList: [] };

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (buitder) => {
    buitder.addCase(getPostList.fulfilled, (state, action) => {
      state.post = action.payload[0].data;
      console.log(action.payload[0].data);
    });
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;
