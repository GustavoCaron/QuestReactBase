import React from "react";


const showLabel = (props) =>{
    alert(props)
}

const LabelButton = (props) => {
    return <button onClick={() => showLabel(props.label)}>{props.label}</button>
}

export default LabelButton