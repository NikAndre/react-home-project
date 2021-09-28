import React, {useMemo, useState} from 'react'
import propTypes from 'prop-types'

export default function Tabs({tabs}){

    const [activeTab, setActiveTab] = useState(0)
    console.log(tabs)
    const {content} = tabs[activeTab]

    return(
        <>
            <div>
                {tabs.map(({title},index)=>(
                    <span
                     key = {title}
                    onClick={()=> setActiveTab(index)}
                    >
                        {title}
                    </span>
                ))}
            </div>
            {content}
        </>
    )
}

