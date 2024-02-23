import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./listSlice";
import { apiCommon } from "./api";
import { registerApi } from "./register/registerApi";
import { loginApi } from "./login/loginApi";
import { loginSlice } from "./login/loginSlice";
import { productsSlice } from "./products/productsSlice";


const store = configureStore({
    reducer : {
        "list" : listSlice,
        [loginSlice.name] : loginSlice.reducer,
        [registerApi.reducerPath] : registerApi.reducer,
        [loginApi.reducerPath]: loginApi.reducer,
        [apiCommon.reducerPath] : apiCommon.reducer,
        [productsSlice.reducerPath] : productsSlice.reducer
    },
    middleware : (getDefaultMiddleware)=>{
        return getDefaultMiddleware()
        .concat(loginApi.middleware)
        .concat(registerApi.middleware)
        .concat(apiCommon.middleware)
    }
});


export default store