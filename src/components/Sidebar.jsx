import React from 'react'
import Navbar from './Navbar'
import Searchbar from './Search'
import Chats from './Chats'


const sidebar = () => {
  return (
    <div className="sidebar">
    <Navbar />
      <Searchbar/>
      <Chats />
    </div>
  )
}

export default sidebar
