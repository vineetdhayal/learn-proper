import React, { useCallback, useMemo, useState } from 'react';
import Data from './data.json';

const headers = [
    { key: "id", label: "ID" },
    { key: "first_name", label: "First name" },
    { key: "last_name", label: "Last name" },
    { key: "email", label: "Email" },
    { key: "gender", label: "Gender" },
    { key: "ip_address", label: "IP address" },
];

const SortButton = ({onClick}) => {
    return <button onClick={onClick}>btn</button>
}

const sortData = (data, sortKey) => {
    if (!sortKey) {
        return data;
    }

    const sortedData = data.sort((a, b) => {
        return a[sortKey] > b[sortKey] ? 1 : -1
    })
    console.log('1', sortedData);
    return sortedData;
}

const SortableTable = () => {
    const [sortKey, setSortKey] = useState('first_name');
    const [sortOrder, setSortOrder] = useState('asc');

    const sortedData = useCallback(() => { return sortData(Data, sortKey) }
        , [Data, sortKey, sortOrder]);

    const changeSort = (header) => {
        console.log(header);
        setSortKey(header.key);
    }

    const callMe = () => {
        console.log('hello')
    }

    return (
        <table>
            <thead>
                <tr>
                    {headers.map((h) => {
                        return <td key={h.key}>{h.label}
                            <SortButton onClick={() => changeSort(h)}></SortButton>
                        </td>
                    })}
                </tr>
            </thead>
            <tbody>
                {sortedData().map((d) => {
                    return <tr key={d.id}>
                        {Object.keys(d).map((val) => {
                            return <td>{d[val]}</td>
                        })}
                    </tr>
                })}
            </tbody>

        </table>
    )
}

export default SortableTable
