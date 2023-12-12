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
        closeMenu: (state) => {
            state.isNavOpen = false;
        }
    },

});

export const {NavMenu,closeMenu} = appSlice.actions;
export default appSlice.reducer;