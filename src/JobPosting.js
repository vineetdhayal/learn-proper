import React from 'react'
import './job.css'

const JobPosting = ({ url, title, by, time }) => {
    const formattedDate = new Date(time*1000).toLocaleDateString();
    return (
        <div className='post_title'>
            <a
                className={url ? "" : 'inactiveLink'}
                href={url}
                target='_blank'
            >{url}</a>
            <h1>{formattedDate}</h1>
        </div>
    )
}

export default JobPosting
