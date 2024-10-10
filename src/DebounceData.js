import React, { useEffect, useState } from 'react'
import UseDebounce from './UseDebounce';

const DebounceData = () => {

    const [search, setSearch] = useState('');
    const debouncedValue = UseDebounce(search, 500);

    const handleSearch = (e) => {
        setSearch(e.target.value);
        console.log(search);
    }

    useEffect(() => {
        if (debouncedValue) {
            console.log('called');
        }
    }, [debouncedValue])

    return (
        <div>
            <input type='text' onChange={handleSearch}></input>
        </div>
    )
}

export default DebounceData
