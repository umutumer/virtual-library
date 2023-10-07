import React from 'react'
import "./Navbar.css"
import Logo from "../../image/logo.png.png"

const Navbar = ({kategoriler,setSecilenKategori,secilenKategori}) => {
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
       </div>
    </nav>
  )
}

export default Navbar

