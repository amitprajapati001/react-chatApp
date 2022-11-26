import React from 'react'
import Avatar from "../img/addAvatar.png"

export default function Register() {
  return (
    <div className='formConatiner'>
    

      <div className="formWrapper">
      <div className="form-header">
        <h2>Amit's Chat App</h2>
        <p>Register</p>
       </div>

         <form >
         <input type="text" placeholder='dispaly name' />
         <input type="email" placeholder='email' />
         <input type="password" placeholder='password' />
         <input type="file" style={{display:"none"}} id="file"/>
         <label htmlFor="file">
          <img src={Avatar} alt="" />
          <span>Add Profile Avatar</span>
         </label>
          <div className="form-footer">
         <button className='register-btn'>Register</button>
         <p>Already have an account? Log In</p>
         </div>
         </form>
      </div>
      
    </div>
  )
}
