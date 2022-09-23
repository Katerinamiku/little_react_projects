import React, {useState} from "react";

function Tab({children}) {
    const [highlightStyle, setHighlightStyle] = useState({left: 0, opacity: 0})
    const moveHighlight = (e) => {
        setHighlightStyle({
            left: e.nativeEvent.layerX - 150
        })
    }
    const hideHighlight = (e) => {
        setHighlightStyle({
            opacity: 0,
            left: e.nativeEvent.layerX - 150
        })
    }
    return (
        <div className="tab" onMouseMove={moveHighlight} onMouseOut={hideHighlight}>
            <div className='highlight' style={highlightStyle}/>
            {children}
        </div>
    )
}

export default Tab;
