import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = (props) => {
  return (
    <header className="main-header">
        <h1 className="header-title">{props.title}</h1>
        <nav className="header-nav">
          <NavLink className="link" to="/">Home</NavLink>
          <NavLink className="link" to="/gallery">Gallery</NavLink>

          <NavLink className="link" to="/shoppingCart">shoppingCart</NavLink>
          <NavLink className="link" to="/connect">Connect</NavLink>
        </nav>
    </header>
  )
}

export default Header