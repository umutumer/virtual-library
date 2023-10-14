import React, { useContext } from 'react'
import "./Navbar.css"
import Logo from "../../image/logo.png.png"
import DataContext from '../../Context/DataContext'

const Navbar = () => {
  const {kategoriler,setSecilenKategori,secilenKategori,setSearch} =useContext(DataContext)
  return (
    <nav>
       <div className="logo">
        <img width={100} src={Logo} alt="Logo" />
        <p>VIRTUAL LIBRARY</p>
       </div>
       <div className="category">
        <ul>
          {
            kategoriler.map(kategori => 
              ((secilenKategori && secilenKategori !== "Tüm Kitaplar" )|| kategori.kategoriAdı !== "Tüm Kitaplar" ) &&
              <li key={kategori.id} onClick={() => setSecilenKategori(kategori.kategoriAdı)} >{kategori.kategoriAdı}</li>
              )
          }
         
          
        </ul>
        <input type="search" placeholder='Ara...' onChange={(e)=> setSearch(e.target.value)} />
       </div>
    </nav>
  )
}

export default Navbar

