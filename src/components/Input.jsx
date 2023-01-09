import React from 'react'
import attach from '../images/attach.png'
import gallery from '../images/image-gallery.png'

const Input = () => {
  return (
    <div className="input">
    <input type="text" placeholder="Typing....." />
    <div className="send">
    <img src={attach} alt=""/>
    <input type="file" style={{display:"none"}} id="file" />
    <label htmlFor="file">
      <img src={gallery} alt=""/>
    </label>
    <button>Send</button>
    </div>
      
    </div>
  )
}

export default Input
