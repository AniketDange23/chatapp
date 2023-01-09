import React from 'react'

const Login = () => {
  return (
    <div className= "FormContainer">
      <div className= "formWrapper">
      <span className="logo">Baat Cheet</span>
      <span className="title">Register</span>

        <form>

          <input type="email" placeholder="email"/>
          <input type="password" placeholder="password"/>
        
      <button> Login</button>
      <p>You do have an account? Register</p>

        </form>
      </div>
    </div>
  )
}

export default Login