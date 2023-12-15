import { createSlice } from "@reduxjs/toolkit";

const searchSlice =  createSlice({
    name: "search",
    initialState:{},
    reudcers: {
        cacheResults: (state,action) => {
            state = { ...action.payload , ...state};

        },
    },
});

export const {} = searchSlice.actions;

export default searchSlice.reducer;