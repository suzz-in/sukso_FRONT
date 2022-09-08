import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { token } from "../../api";

export const getCommentList = createAsyncThunk("get/commentList", async () => {
  const { data } = await token.get("/comment");
  return data;
});

export const addCommentList = createAsyncThunk(
  "add/commentList",
  async (newComment) => {
    const { data } = await token.post("/comment", newComment);
    return data;
  }
);

export const deleteComment = createAsyncThunk("delete/comment", async (id) => {
  const { data } = await token.delete(`/comment/${id}`);
  return data;
});

export const updateComment = createAsyncThunk(
  "update/comment",
  async (updateData) => {
    const { data } = await token.post(
      `/comment/${updateData.comment.commentId}`,
      { content: updateData.patchValue }
    );

    return data;
  }
);

const initialState = { comment: [] };

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCommentList.fulfilled, (state, action) => {
      state.comment = action.payload;
    });
    builder.addCase(addCommentList.fulfilled, (state, action) => {
      state.comment.push(action.payload);
    });
  },
});

export const {} = commentSlice.actions;
export default commentSlice.reducer;
