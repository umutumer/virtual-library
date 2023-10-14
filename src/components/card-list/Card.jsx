import React, { useContext } from "react";
import "./Card.css";
import {AiFillEdit} from 'react-icons/ai'
import {BsFillTrashFill} from 'react-icons/bs'
import DataContext from "../../Context/DataContext";

const Card = ({kitap}) => {
  const {cardDuzenle, kitapSil } =useContext(DataContext)
  return (
    
      !kitap.isDeleted && (
        <div key={kitap.id} className="card">
          <button className="delete-btn" onClick={() => kitapSil(kitap.id)}>
            <BsFillTrashFill />
            </button>
          <img src={kitap.kitapResim} alt="resim" />
          <div className="card-content">
            <p>Kitap Adı: {kitap.kitapAdi} </p> <br />
            <p>Kitap Kategorisi: {kitap.kitapKategori} </p> <br />
            <p>Kitap Yazarı: {kitap.kitapYazari} </p> <br />
            <p>Sayfa Sayısı: {kitap.sayfaSayisi} </p> <br />
            <p>
              Kitap Açıklama: {kitap.kitapAciklama.substring(0, 165) + "..."}{" "}
            </p>{" "}
            <br />
            <button className="edit-btn" onClick={() => cardDuzenle(kitap.id)}>
              <AiFillEdit />
            </button>
          </div>
        </div>
      )
  );
};

export default Card;
