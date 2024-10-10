import React from 'react'
import Folder from './Folder'

const exploler = {
    id: '1',
    name: 'root',
    isFolder: true,
    items: [
        {
            id: '2',
            name: 'public',
            isFolder: true,
            items: [{
                id: '3',
                name: 'src',
                isFolder: false
            }]
        }
    ]
};

const Exploler = () => {
    return (
        <div>
            <Folder exploler={exploler}></Folder>
        </div>
    )
}

export default Exploler
