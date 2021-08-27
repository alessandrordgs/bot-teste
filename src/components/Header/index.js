import React from 'react'
import avatar from '../../assets/avatar2.png'
import back from '../../assets/back3.png'
import './style.css'

const Header = () => {
  return (
    <header>
      <div className="header">
      <img src={back} alt="Avatar" className="avatar"/>
        <img src={avatar} alt="Avatar" className="avatar"/>
      </div>
      <p id="pheader">Nicole BOT</p>
    </header>
  )
}

export default Header;