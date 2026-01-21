import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { PostType } from "../../../../widgets/PostList/PostList";
// import { fetchPosts } from "../../../../app/providers/store/reducers/ActionCreators";

const postsAdapter = createEntityAdapter<PostType>();

interface PostState extends ReturnType<typeof postsAdapter.getInitialState> {
    isLoading: boolean;
    error: string;
}

const initialState: PostState = postsAdapter.getInitialState({
    posts: [],
    isLoading: false,
    error: '',
})

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
});

export default postSlice.reducer