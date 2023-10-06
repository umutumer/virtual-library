import React, { useState } from 'react'
import  "./Form.scss"


const Form = ({yeniKitap ,kitaplar}) => {
  const [kitapAdi,setKitapAdi] =useState("")
  const [kitapKategori,setKitapKategori] = useState("Kategori Seçiniz")
  const [kitapYazari,setKitapYazari] = useState("")
  const [sayfa,setSayfa] = useState("")
  const [kitapResim,setKitapResim] = useState("")
  const [kitapAciklama,setKitapAciklama] = useState("")
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("Form Onaylandı");
    yeniKitap({
      id: kitaplar.length +1,
      kitapAdi:kitapAdi,
      kitapKategori:kitapKategori,
      kitapYazari:kitapYazari,
      sayfa:sayfa,
      kitapResim:kitapResim,
      kitapAciklama:kitapAciklama
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <h3>Kitap Ekle</h3>
      <select  onChange={e =>setKitapKategori(e.target.value)} >
        <option value="" >Kategori Seçiniz</option>
        <option value="">Yazılım</option>
        <option value="">Edebiyat</option>
        <option value="">Tarih</option>
        <option value="">Diğer</option>
      </select>
      <input value={kitapAdi} type="text" onChange={e =>setKitapAdi(e.target.value)}  placeholder='Kitap adı' />
      <input value={kitapYazari} type="text" onChange={e =>setKitapYazari(e.target.value)} placeholder='Kitap Yazarı' />
      <input value={sayfa} type="number" onChange={e =>setSayfa(e.target.value)} placeholder='Kitap Sayfa' />
      <input value={kitapResim} type="text" onChange={e =>setKitapResim(e.target.value)} placeholder='Kitap Resmi(Url)' />
      <textarea value={kitapAciklama} placeholder='Kitap Açıklaması'onChange={e =>setKitapAciklama(e.target.value)} ></textarea>
      <input type="submit" value={"Ekle"} disabled={
       !kitapAciklama.trim() ||
        !kitapAdi.trim() ||
        !kitapKategori ==="Kategori Seçiniz" ||
        !kitapYazari.trim() ||
        !kitapResim.trim() ||
        !sayfa
      } />
    </form>
  )
}

export default Form
