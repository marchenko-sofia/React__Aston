import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { AlbumType, PhotoType } from "../model/types";

export const albumsApi = createApi({
    reducerPath: "albumsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
    tagTypes: ["Almums"],
    endpoints: (builder) => ({
        getAlbumsByUserId: builder.query<AlbumType[], string>({
            query: (userId) => `/users/${userId}/albums`,
            providesTags: (result, _error, userId) =>
                result ? [{ type: "Almums", userId }] : [],
        }),
        getPhotosByAlbumId: builder.query<PhotoType[], string>({
            query: (albumId) => `/albums/${albumId}/photos`,
            providesTags: (result, _error, albumId) =>
                result ? [{ type: "Almums", albumId }] : [],
        })
    }),
});
