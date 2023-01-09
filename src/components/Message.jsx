import React from 'react'
import Img from '../images/img1.jpg'
import Img2 from '../images/image.jpg'
const Message = () => {
  return (
    <div className="message owner">
      <div className="message-body">
      <img src={Img} />  
      <span>Just now</span>      </div>

        <div className="message-text">
        <img src={Img2} />
       <p> Welcome to New Baat Cheet</p>
        </div>
    </div>
    
  )
}

export default Message