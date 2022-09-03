import React, { useState } from 'react'

export default function Tabs() {

    const [toggleState,setToggleState] = useState(1);

    const toogleTab = (index)=>{
        setToggleState(index)
    }

  return (
    <div>
        <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={toogleTab(1)}>
            tab 1    
        </button>
        <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={toogleTab(2)}>
            tab 2    
        </button>
        <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={toogleTab(3)}>
            tab 3    
        </button>
        <div className='content'>
            <div className={toggleState === 1? "content active-content" : "content"}>abc</div>    
            <div className={toggleState === 2? "content active-content" : "content"}>abc2</div>    
            <div className={toggleState === 3? "content active-content" : "content"}>abc3</div>    
        </div>
    </div>
  )
}
