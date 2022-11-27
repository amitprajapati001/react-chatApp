import React from 'react'
// import Avatar from "../img/addAvatar.png"

export default function Register() {
  return (
    <div className='formConatiner'>
    

      <div className="formWrapper">
      <div className="form-header">
        <h2>Amit's Chat App</h2>
        <p>Log In Page</p>
       </div>

         <form >
         
         <input type="email" placeholder='email' />
         <input type="password" placeholder='password' />
         
         
          <div className="form-footer">
         <button className='register-btn'>Signi In</button>
         <p>Don't have an account? Sign Up</p>
         </div>
         </form>
      </div>
      
    </div>
  )
}
