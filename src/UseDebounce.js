import React, { useEffect, useState } from 'react'

const UseDebounce = (value, wait) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        let timer = setTimeout(() => {
            console.log('value', value);
            setDebouncedValue(value)
        }, wait);

        return () => clearTimeout(timer);
    }, [value, wait]);

    return debouncedValue;
}

export default UseDebounce
