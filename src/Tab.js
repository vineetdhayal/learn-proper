import React, { useState } from 'react';
import './styles.css'

const TABS = [{
    label: 'HTML',
    text: 'Html'
},
{
    label: 'CSS',
    text: 'Css'
},
{
    label: 'JAVASCRIPT',
    text: 'Javascript'
}];

const Tab = () => {
    const [activeTab, setActiveTab] = useState('');
    return (
        <div>
            {TABS.map((tab) => {
                return <button onClick={() => setActiveTab(tab.label)} className={activeTab === tab.label && 'active'}>{tab.label}</button>
            })}
            {TABS.map((tab) => {
                return activeTab === tab.label && <p>{tab.text}</p>
            })}
        </div>
    )
}

export default Tab
