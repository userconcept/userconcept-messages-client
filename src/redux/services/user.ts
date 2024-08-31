import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

import type { User } from '../../types/user.types.ts';

import { API_URL, TOKEN } from '../../data/constants.data.ts';

export const userApi = createApi({
    reducerPath: 'userApi',
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
    refetchOnMountOrArgChange: true,
    endpoints: (builder) => ({
        getUsersProfile: builder.query<User[], void>({
            query: () => 'user'
        }),
        getProfile: builder.query<User, void>({
            query: () => 'user/profile'
        })
    })
});

// export const {
//     useGetUsersProfileQuery,
//     useGetProfileQuery
// } = userApi;
