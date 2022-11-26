import React from 'react'

export default function Search() {
  return (
    <div className='search'>
      <div className="search-filed"><input type="text" placeholder='Find a user'/></div>
      
      <div className="user">
      <img  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div className="user-details">
        
          <span>Amit</span>
        </div>
        
      </div>
    </div>
  )
}
