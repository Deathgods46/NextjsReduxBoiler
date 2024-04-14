// postsActions.ts

import { ThunkAction } from '@reduxjs/toolkit';
import { fetchPostsStart, fetchPostsSuccess, fetchPostsFailure } from './postsSlice';
import  RootState  from '../store'; // Assuming you have a RootState type defined in store.ts

// Mock API call function
const fetchPostsFromAPI = async () => {
  try {
    const response = await fetch('https://api.example.com/posts');
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Define Thunk type
type ThunkResult<R> = ThunkAction<R, typeof RootState, undefined, any>;

// Action creator for fetching posts
export const fetchPosts = (): ThunkResult<void> => async (dispatch) => {
  dispatch(fetchPostsStart());
  try {
    const posts = await fetchPostsFromAPI();
    dispatch(fetchPostsSuccess(posts));
  } catch (error: any) {
    dispatch(fetchPostsFailure(error.message));
  }
};
