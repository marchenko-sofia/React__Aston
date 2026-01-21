import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";


type UserType = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: object,
    phone: string,
    website: string,
    company: object,
}

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