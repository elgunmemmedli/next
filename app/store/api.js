import {createApi, fetchBaseQuery} from  "@reduxjs/toolkit/query/react"


const baseQuery = fetchBaseQuery({
    baseUrl : 'https://products-e5533-default-rtdb.firebaseio.com/',
});



export const apiCommon = createApi({
    reducerPath : "apiCommon",
    baseQuery,
    endpoints : () => ({})
}) 