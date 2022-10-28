import React from "react";
import './styles/Header.css'

const Header = () => {
  return (
    <nav className="header">
      <div className="header--logo">
        <img className="header--logo_icon" src="../assets/meme-icon.png" alt="" />
        <span className="header--logo_text">Meme generator</span>
      </div>
      <div className="header--title">React Course - Project 3</div>
    </nav>
  )
}

export default Header 