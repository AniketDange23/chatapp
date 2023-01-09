import React from 'react'
import Chat from "../components/Chat"
import Chats from "../components/Chats"
import Sidebar from "../components/Sidebar"
import Search from "../components/Search"
import Navbar from "../components/Navbar"
import Input from "../components/Input"
import Message from "../components/Message"

const Home = () => {
  return (
    <div className="home">
    <div className="container">
        <Sidebar />
      <Chat/>
      
    </div>
    </div>
  )
}

export default Home
