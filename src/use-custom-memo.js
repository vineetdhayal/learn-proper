import React from 'react';
import { useEffect, useRef } from 'react';

function areEqual(prevValue, nextvalue) {
    if (prevValue === null) {
        return false;
    }
    if (prevValue.length !== nextvalue.length) {
        return;
    }
    for (let i = 0; i < prevValue.length; i++) {
        if (prevValue[i] !== nextvalue[i]) {
            return false;
        }
    }
console.log(' am here');
    return true;
}

export const useCustomMemo = (cb, deps) => {
    const memoizedRef = useRef();
    if (!memoizedRef.current || !areEqual(memoizedRef.current.deps, deps)) {
        memoizedRef.current = {
            value: cb(),
            deps
        }
    }

    useEffect(() => {
        memoizedRef.current = null;
    })

    return memoizedRef.current.value;
}
