import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getComment = createAsyncThunk("get/comment", async () => {
  const respone = await axios.get("http://localhost:3001/comment");
  return respone.data;
});

export const addComment = createAsyncThunk("add/comment", async (comment) => {
  const reponse = await axios.post("http://localhost:3001/comment", comment);
  return reponse.data;
});

const initialState = { comment: [] };

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getComment.fulfilled, (state, action) => {
      state.comment = action.payload;
    });
    builder.addCase(addComment.fulfilled, (state, action) => {
      state.comment = state.comment.push(action.payload);
    });
  },
});

export const {} = commentSlice.actions;
export default commentSlice.reducer;
