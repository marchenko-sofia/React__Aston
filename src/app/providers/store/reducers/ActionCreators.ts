import { createAsyncThunk } from "@reduxjs/toolkit";

function getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message;
    return String(error)
}

export const fetchPosts = createAsyncThunk(
    'post/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            return response.json;
        } catch (error) {
            return thunkAPI.rejectWithValue(getErrorMessage(error));
        }
    }
)