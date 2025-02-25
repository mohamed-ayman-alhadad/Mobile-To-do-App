import { createSlice } from "@reduxjs/toolkit";

const taskSlice= createSlice({
    name: 'task',
    initialState: {
        done: false
    },
    reducers: {
        cheched: (state, action) => {
            state.done = action.payload
        }
    }
})