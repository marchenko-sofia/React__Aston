import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { UserType } from "../types";

const usersAdapter = createEntityAdapter<UserType>();

interface UserState extends ReturnType<typeof usersAdapter.getInitialState> {
    isLoading: boolean;
    error: string;
}

const initialState: UserState = usersAdapter.getInitialState({
    users: [],
    isLoading: false,
    error: '',
});

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
});

export default userSlice.reducer