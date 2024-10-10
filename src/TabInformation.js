import React, { useState } from 'react';
import './TabInformation.css';

const TabInformation = () => {
    const obj = [
        { id: 'tab1', label: 'tab one' },
        { id: 'tab2', label: 'tab two' },
        { id: 'tab3', label: 'tab three' }
    ];
    const [selectedtab, setSelectedtab] = useState('tab1');
    const [text, setText] = useState(obj[0].label);

    const callMe = (id) => {
        setSelectedtab(obj[id]);
        setText(obj[id].label);
    }

    return (
        <>
            <div className='flex'>
                {obj.map((ob, index) => {
                    return <div className={selectedtab === ob.id ? 'active' : 'hover'} onClick={() => callMe(index)} key={ob.id}>{ob.id}</div>
                })}
            </div>
            { text}
        </>
    )
}

export default TabInformation
