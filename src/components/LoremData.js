import { createSlice } from "@reduxjs/toolkit";



const loremSlice = createSlice({
    name: "loremDAta",
    initialState: {
        data: []
    },
    reducers: {
        addData: (state, action) => {
            state.data = action.payload
        }
    }
})


export const { addData } = loremSlice.actions

export default loremSlice.reducer