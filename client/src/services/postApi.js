import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const createRequest = (url)=>({url, headers:{}})
const postHeader = {
    'Content-Type':'application/json'
}

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
    endpoints: (builder)=>({
        getPosts: builder.query({
            query: () => ({url: `posts/`, headers: postHeader}),
        }),
        getPost: builder.query({
            query: (id)=> ({url: `posts/${id}`, headers: postHeader})
        }),
        createPost: builder.query({
            query: (body)=>({url: 'posts/', headers: postHeader, method: 'POST', body})
        }),
        updatePost: builder.query({
            query: ({id, ...body})=>({url: `posts/${id}`, headers: postHeader, method: 'PATCH', body})
        }),
        deletePost: builder.query({
            query: (id)=> ({url: `posts/${id}`, headers: postHeader, method:'DELETE'})
        }),

    })
})

export const { useGetPostsQuery, useGetPostQuery, useCreatePostQuery, useUpdatePostQuery, useDeletePostQuery } = postApi