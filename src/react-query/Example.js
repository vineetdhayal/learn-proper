import React from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

function wait(duration) {
    return new Promise((res, rej) => setTimeout(res, duration));
}

const posts = ['first', 'second']

const Example = () => {
    // const queryClient = useQueryClient(); 
    const postQuery = useQuery({
        queryKey: ['posts'],
        queryFn: () => wait(500).then(() => posts)
    });

    const newPostMutation = useMutation({
        mutationFn: (newPosts) => wait(1000).then(() => [...posts, newPosts]),
        onSuccess: () => {
            // return queryClient.invalidateQueries('posts');
        }
    })

    if (postQuery.isLoading) {
        return <h1>Loading...</h1>
    }
    if (postQuery.isFetched) {
        console.log(postQuery.data);
        console.log(posts)
    }

    return (
        <div>
            {postQuery.data.map((z, index) => <div key={z}>{z}</div>)}
            <button onClick={() => newPostMutation.mutate('frefer')}>sdfsd</button>
        </div>
    )
}

export default Example
