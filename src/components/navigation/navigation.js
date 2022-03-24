import React, { useState } from 'react';
import '../../Styles.css';

export default function Tabs({ tabs }) {
    const [activeTab, setActiveTab] = useState(0);
    console.log(tabs);
    const { content } = tabs[activeTab];

    return (
        <>
            <div className={'tab-wrapper'}>
                {tabs.map(({ title }, index) => (
                    <span className={'tab-element'} key={title} onClick={() => setActiveTab(index)}>
                        {title}
                    </span>
                ))}
            </div>
            {content}
        </>
    );
}
