import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const albumsApi = createApi({
    reducerPath: "albumsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
    tagTypes: ["Almums"],
    endpoints: (builder) => ({
        getAlbumsByUserId: builder.query({
            query: (userId) => `/users/${userId}/albums`,
            providesTags: (result, _error, userId) =>
                result ? [{ type: "Almums", userId }] : [],
        }),
        getPhotosByAlbumId: builder.query({
            query: (albumId) => `/albums/${albumId}/photos`,
            providesTags: (result, _error, albumId) =>
                result ? [{ type: "Almums", albumId }] : [],
        })
    }),
});
