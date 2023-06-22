import React from 'react'

const Text = (props) => {
    return <p style={{color: 'red'}}>{props.title.toUpperCase()}</p>
}

export default Text