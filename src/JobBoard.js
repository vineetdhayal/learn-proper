import React from 'react'
import { useState } from 'react';
import JobPosting from './JobPosting';
import { useEffect } from 'react';

const rawData = {
    "by": "jamilbk",
    "id": 35908337,
    "score": 1,
    "time": 1683838872,
    "title": "Firezone (YC W22) is hiring Elixir and Rust engineers",
    "type": "job",
    "url": "https://www.ycombinator.com/companies/firezone/jobs"
};

const JobBoard = () => {
    const url = 'https://hacker-news.firebaseio.com/v0';
    const [items, setItems] = useState([]);
    const [itemIds, setItemIds] = useState(null);
    const [fetchingDetails, setFetchingDetails] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);

    const fetchItems = async (currentPage) => {
        setCurrentPage(currentPage);
        console.log(currentPage);
        setFetchingDetails(true);
let itemIdsForPage;
        if (itemIds === null) {
            const val = await fetch(`${url}/jobstories.json`);
            const response = await val.json();
            itemIdsForPage = response;
        }
        console.log('item ids for page', itemIdsForPage);
         const pageid = itemIdsForPage.slice(currentPage * 6, currentPage * 6 + 6);

        const data = await Promise.all(pageid?.map((page) => {
            return fetch(`${url}/item/${page}.json`).then(res => res.json())
        }));
        console.log('complete', data);
        setItems([...items, ...data]);
    }

    useEffect(() => {
        if (currentPage === 0) {
            fetchItems(0);
        }
    }, [])

    return (
        <div>
            <h1>Job Postings</h1>
            {
                items.length < 1 ? (<h1 className='loading'>Loading ...</h1>) : (
                    <div>
                        {items.map((item, index) => {
                            return <JobPosting key={index} {...item} />
                        })}
                    </div>
                )
            }
            <button className='load-more-jobs' onClick={() => fetchItems(currentPage + 1)}>Load More Jobs</button>
        </div>
    )
}

export default JobBoard
