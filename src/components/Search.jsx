
import React from 'react'
 import avatar from '../images/avatar.png'
const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
      <input type="text" placeholder="Search user..." />
        </div>
        <div className="userChat">
          <img src={avatar} alt=""/>
          <div className="userChatInfo">
            <span>Aniket</span>
            <p>hello</p>
          </div>
         </div>
    </div>
  )
}

export default Search