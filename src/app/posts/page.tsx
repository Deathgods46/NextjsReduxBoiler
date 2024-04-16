'use client';
import { useGetPostsQuery } from '@/redux/posts/posts'

import React from 'react'

function Posts() {
    const { data, error, isLoading, isSuccess } = useGetPostsQuery();
    console.log(data);

    return (
        <div>Posts</div>
    )
}

export default Posts;