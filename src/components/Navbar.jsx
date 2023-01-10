import React from "react";
import avatar from '../images/avatar.png'
import {auth}from '../firebase'
import { signOut}from "firebase/auth"

const Navbar = () => {

  
  return (
    <div className="navbar">
      <span className="logo">Baat cheet</span>
      <div className="user">
      <img src={avatar} alt="" />
      <span>Aniket</span>
      <button onClick={() => signOut(auth)}>log out</button></div>
    </div>
  );
};
 
export default Navbar;
