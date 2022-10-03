import React from 'react'
import "./ImageButton.css"

const ImageButton = (props) => {
  return (
    <div>
        <button className="Acc-btn px-3 mx-1">
                  <b>{props.title}</b>
                </button>
    </div>
  )
}

export default ImageButton