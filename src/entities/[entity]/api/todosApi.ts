import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
    reducerPath: "todosApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
    tagTypes: ["Todos"],
    endpoints: (builder) => ({
        getTodosByUserId: builder.query({
            query: (userId) => `/users/${userId}/todos`,
            providesTags: (result, _error, userId) =>
                result ? [{ type: "Todos", userId }] : [],
        }),
    }),
});