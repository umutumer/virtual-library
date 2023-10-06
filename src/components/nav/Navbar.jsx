import React from 'react'
import "./Navbar.css"
import Logo from "../../image/logo.png.png"

const Navbar = () => {
  return (
    <nav>
       <div className="logo">
        <img width={100} src={Logo} alt="Logo" />
        <p>VIRTUAL LIBRARY</p>
       </div>
       <div className="category">
        <ul>
          <li>Yazılım</li>
          <li>Edebiyat</li>
          <li>Tarih</li>
          <li>Diğer</li>
        </ul>
       </div>
    </nav>
  )
}

export default Navbar

