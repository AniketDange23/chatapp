import React from 'react'
import avatar from '../images/avatar.png'

const Chats = () => {
  return (
    <div className="chats">
     <div className="userChat">
          <img src={avatar} alt="userimg"/>
          <div className="userChatInfo">
            <span>Aniket</span>
            <p>Hello Guy s</p>
          </div>
        </div>
        <div className="userChat">
          <img src={avatar} alt="userimg"/>
          <div className="userChatInfo">
            <span>Aniket</span>
            <p>Hello Guy s</p>
          </div>
        </div>
        <div className="userChat">
          <img src={avatar} alt="userimg"/>
          <div className="userChatInfo">
            <span>Aniket</span>
            <p>Hello Guy s</p>
          </div>
        </div>
        <div className="userChat">
          <img src={avatar} alt="userimg"/>
          <div className="userChatInfo">
            <span>Aniket</span>
            <p>Hello Guy s</p>
          </div>
        </div>
      
    </div>
  )
}

export default Chats
