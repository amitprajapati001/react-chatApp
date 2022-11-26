import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
      <h5 className="logo">Amit's Chat</h5>
      <div className="signedUser">
        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <span>Amit</span>
        <button>Logout</button>
      </div>
      
    </div>
  )
}

