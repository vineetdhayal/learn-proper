import React from 'react'
import { useState } from 'react';
import './like.css';

const Like = () => {
    const [liked, setLiked] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState('');
    const url = "https://www.greatfronend.com/api/questions/like-button";

    const handleLikeButton = async () => {
        try {
            setIsFetching(true);
            console.log(JSON.stringify({ action: liked ? 'liked' : 'like' }));
            const data =
                await fetch(url, {
                    method: 'POST',
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify({ action: liked ? 'liked' : 'like' })
                })
console.log(await data.json());
            if (data.status >= 200 && data.status < 300) {
                setLiked(!liked);
            }
        } finally {
            setIsFetching(false);
        }
    }

    return (
        <button className={`likeBtn ${liked ? 'liked' : ''}`} onClick={handleLikeButton}>
            Heart{liked ? 'Liked' : 'Like'}
        </button>
    )
}

export default Like;
