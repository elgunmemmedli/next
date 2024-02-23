import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const commonApi = createAsyncThunk(
    'commonApi',
    async (id)=> {
        const res = await axios.get(`https://products-e5533-default-rtdb.firebaseio.com/products/${id}.json`);
        return res.data
    }
)

const initialState = {
    loading : false,
    error : false,
    viewProducts : {}
}

const productsSlice = createSlice({
    name : 'productsSlice',
    initialState,
    reducers : {
    },
    extraReducers :(builder) =>{
        builder.addCase(commonApi.pending, (state)=>{
            state.loading = true
        })
        .addCase(commonApi.rejected,(state)=>{
            state.error = true
        })
        .addCase(commonApi.fulfilled,(state,actions)=>{
            state.viewProducts = actions.payload
            state.loading = false
        })
    }

})

export {productsSlice}