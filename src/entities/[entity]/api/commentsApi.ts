import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const commentsApi = createApi({
    reducerPath: "CommentsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
    tagTypes: ["Comments"],
    endpoints: (builder) => ({
        getAllComments: builder.query({
            query: () => "/comments",
            providesTags: ["Comments"],
        }),
    }),
});