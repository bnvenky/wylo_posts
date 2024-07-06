import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
    updatePost: (state, action) => {
      const index = state.findIndex(post => post.id === action.payload.id);
      state[index] = action.payload;
    },
  },
});

export const { addPost, updatePost } = postSlice.actions;
export default postSlice.reducer;
