import { apiCommon } from "../api";


const apiWithTag = apiCommon.enhanceEndpoints({addTagTypes: ['Products']})

export const productsApi = apiWithTag.injectEndpoints({
    tagTypes: ['Products'],
    endpoints: builder => ({
        productsAdd: builder.mutation({
            query: (products) => {
                return {
                    url: 'products.json',
                    method : 'POST',
                    body : products
                }
            },
            invalidatesTags: ['Products']
        }),
        productsGet: builder.query({
            query: () => {
                return {
                    url: 'products.json',
                    method : 'GET',
                }
            },
            providesTags: ['Products'],
        }),
        productsDelete: builder.mutation({
            query: (id) => {
                return {
                    url: `products/${id}.json`,
                    method : 'DELETE'
                }
            },
            invalidatesTags: ['Products']
        }),
    })
});




export const {useProductsAddMutation,useProductsGetQuery,useProductsGetOneQuery,useProductsEditMutation,useProductsDeleteMutation} = productsApi;