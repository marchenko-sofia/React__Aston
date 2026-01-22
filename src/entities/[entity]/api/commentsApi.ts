import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { CommentType } from "../model/types";

export const commentsApi = createApi({
    reducerPath: "CommentsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
    tagTypes: ["Comments"],
    endpoints: (builder) => ({
        getAllComments: builder.query<CommentType[], string>({
            query: () => "/comments",
            providesTags: ["Comments"],
        }),
    }),
});