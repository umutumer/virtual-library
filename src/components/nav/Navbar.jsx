import React, { useContext } from 'react'
import "./Navbar.css"
import Logo from "../../image/logo.png.png"
import DataContext from '../../Context/DataContext'

const Navbar = () => {
  const {state,dispatch,handleClickKategori} =useContext(DataContext)

  return (
    <nav>
       <div className="logo">
        <img width={100} src={Logo} alt="Logo" />
        <p>VIRTUAL LIBRARY</p>
       </div>
       <div className="category">
        <ul>
          {
            state.kategoriler.map(kategori => 
              ((state.secilenKategori && state.secilenKategori !== "Tüm Kitaplar" )|| kategori.kategoriAdı !== "Tüm Kitaplar" ) &&
              <li key={kategori.id} onClick={() => handleClickKategori(kategori.kategoriAdı)} >{kategori.kategoriAdı}</li>
              )
          }
         
          
        </ul>
        <input type="search" placeholder='Ara...' onChange={(e)=> dispatch({type:"search",payload:e.target.value})} />
       </div>
    </nav>
  )
}

export default Navbar

