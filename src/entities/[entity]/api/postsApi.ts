import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { PostType } from "../model/types";

export const postsApi = createApi({
    reducerPath: "postsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
    tagTypes: ["Posts"],
    endpoints: (builder) => ({
        getAllPosts: builder.query<PostType[], string>({
            query: () => "/posts",
            providesTags: ["Posts"],
        }),
        getPostById: builder.query<PostType, string>({
            query: (postId) => `/posts/${postId}`,
            providesTags: (result, _error, postId) =>
                result ? [{ type: "Posts", postId }] : [],
        }),
        getPostsByUserId: builder.query<PostType[], string>({
            query: (userId) => `users/${userId}/posts`,
            providesTags: (result, _error, userId) =>
                result ? [{ type: "Posts", userId }] : [],
        }),
    }),
});