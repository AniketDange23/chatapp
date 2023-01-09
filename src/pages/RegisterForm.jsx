import React from 'react'
import add from "../images/add.png"

const RegisterForm = () => {
  return (
    <div className= "FormContainer">
      <div className= "formWrapper">
      <span className="logo">Baat Cheet</span>
      <span className="title">Register</span>

        <form>

          <input type="text" placeholder="name"/>
          <input type="email" placeholder="email"/>
          <input type="password" placeholder="password"/>
          
          <input style={{display:"none"}} type="file" id="file"/>
          
          <label htmlFor="file"> 
          <img src={add} alt="" />
          <span> Upload your profile</span>
          </label>
      <button>Sign Up</button>
      <p>You do have an account? Login</p>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm