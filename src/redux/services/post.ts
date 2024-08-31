import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

import type { Post } from '../../types/post.types.ts';

import { API_URL, TOKEN } from '../../data/constants.data.ts';

export const postApi = createApi({
    reducerPath: 'postApi',
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
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], void>({
            query: () => 'post',
            providesTags: ['Post']
        }),
        createPost: builder.mutation<Post, Omit<Post, 'id' | 'images' | 'author'>>({
            query: ({ title, text }) => ({
                url: 'post',
                method: 'POST',
                body: {
                    title,
                    text
                }
            }),
            async onQueryStarted({ }, { queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    console.log('queryFulfilled data:', data);
                } catch (err) {

                }
            },
            invalidatesTags: ['Post']
        })
    })
});

// export const {
//     useGetPostsQuery,
//     useCreatePostMutation
// } = postApi;
