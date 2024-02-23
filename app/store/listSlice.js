import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name : ""
}


const listSlice = createSlice ({
    name : 'list',
    initialState,
    reducers : {
        setName(state,actions){
            state.name = actions.payload;
        }
    }
})


export const {setName} = listSlice.actions

export default listSlice.reducer