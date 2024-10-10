import React, { useEffect, useRef, useState } from 'react'

const Interval = () => {
    const initial: any = useRef(null);
    const [count, setCount] = useState(0);

    useEffect(() => {
        initial.current = setInterval((prev) => prev + 1, 1000);
        return () => clearInterval(initial.current);
    }, []);

    return (
        <div>
            {count}
        </div>
    )
}

export default Interval
