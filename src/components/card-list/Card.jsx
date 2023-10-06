import React from "react";
import "./Card.css";

const Card = ({kitaplar,kitapSil}) => {
  
  return (

      kitaplar.map(kitap => <div key={kitap.id} className="card">
      <button onClick={() => kitapSil(kitap.id)}>X</button>
    <img
      src={kitap.kitapResim}
      alt="resim"
    />
    <div className="card-content">
    
      <p>Kitap Adı: {kitap.kitapAdi} </p> <br />
      <p>Kitap Kategorisi: {kitap.kitapKategori} </p> <br />
      <p>Kitap Yazarı: {kitap.kitapYazari} </p> <br />
      <p>Sayfa Sayısı: {kitap.sayfaSayisi} </p> <br />
      <p>Kitap Açıklama: {kitap.kitapAciklama.substring(0,165)+"..."} </p> <br />
    </div>
  </div>
  )
   
  );
};

export default Card;
