import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const postsApi = createApi({
    reducerPath: "postsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
    tagTypes: ["Posts"],
    endpoints: (builder) => ({
        getAllPosts: builder.query({
            query: () => "/posts",
            providesTags: ["Posts"],
        }),
        getPostById: builder.query({
            query: (postId) => `/posts/${postId}`,
            providesTags: (result, _error, postId) =>
                result ? [{ type: "Posts", postId }] : [],
        }),
        getPostsByUserId: builder.query({
            query: (userId) => `users/${userId}/posts`,
            providesTags: (result, _error, userId) =>
                result ? [{ type: "Posts", userId }] : [],
        }),
    }),
});