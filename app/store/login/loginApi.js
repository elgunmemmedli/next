import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const loginApi = createApi({
    reducerPath: 'loginApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://identitytoolkit.googleapis.com/v1'
    }),

    endpoints(build) {
        return {
            signIn: build.mutation({
                query: (user) => {
                    return {
                        url: `/accounts:signInWithPassword?key=AIzaSyDIHMotprYs6WejbqqQKkVdNh5PFBO6W7c`,
                        method: 'POST',
                        body: {
                            email: user.email,
                            password: user.password,
                            returnSecureToken: true
                        }
                    }
                }
            })
        }
    }
})



export const { useSignInMutation } = loginApi

export { loginApi };
