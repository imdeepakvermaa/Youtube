import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({

    name: "app",
    initialState:{
        isNavOpen: true,
    },
    reducers:{
        NavMenu: (state) => {
            state.isNavOpen = !state.isNavOpen;
        },
    },

});

export const {NavMenu} = appSlice.actions;
export default appSlice.reducer;