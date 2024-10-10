import React, { useState } from 'react';
import './styles.css'

const Folder = ({ exploler }) => {
    const [isExpand, setIsExpand] = useState(false);
    if (exploler.isFolder) {
        return (
            <div>
                <div>
                    <span className='folder' onClick={() => setIsExpand(!isExpand)}>{exploler.name}</span>
                </div>
                <div style={{ display: isExpand ? 'block' : 'none' }}>{exploler.items.map((z) => {
                    return <Folder exploler={z}></Folder>
                })}</div>
            </div>
        )
    }
    else {
        return (<div>{exploler.name}</div>)
    }
}

export default Folder
