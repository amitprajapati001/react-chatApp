import React from 'react'
import Add from "../img/add.png"
import Cam from "../img/cam.png"
import more from "../img/more.png"
import Messages from './Messages'
import Input from "./Input"

export default function Chat() {
  return (
    <div className='chat'>
      <div className="chat-info">
        <span>Amit</span>
        <div className="chat-icons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}
