import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

import { API_URL, TOKEN } from '../../data/constants.data.ts';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
        prepareHeaders: (headers) => {
            const token = Cookies.get(TOKEN);

            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }

            return headers;
        }
    }),
    endpoints: (builder) => ({
        authUser: builder.mutation({
            query: ({ email, password }) => ({
                url: 'auth/login',
                method: 'POST',
                body: {
                    email,
                    password
                }
            }),
            async onQueryStarted({ }, { queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    Cookies.set(TOKEN, data.token);
                } catch (err) {

                }
            }
        }),
        registerUser: builder.mutation({
            query: ({ username, email, password }) => ({
                url: 'auth/register',
                method: 'POST',
                body: {
                    username,
                    email,
                    password
                }
            }),
            async onQueryStarted({ }, { queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    Cookies.set(TOKEN, data.token);
                } catch (err) {

                }
            }
        }),
        updateUser: builder.mutation({
            query: ({ username, email, password }) => ({
                url: 'auth/update',
                method: 'PUT',
                body: {
                    username,
                    email,
                    password
                }
            })
        })
    })
});

// export const {
//     useAuthUserMutation,
//     useRegisterUserMutation,
//     useUpdateUserMutation
// } = authApi;
