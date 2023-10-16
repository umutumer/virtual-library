import React, { useContext } from "react";
import "./Form.scss";
import DataContext from "../../Context/DataContext";

const Form = () => {

const { state,dispatch,handleSubmit } = useContext(DataContext)
  return (
    <form onSubmit={handleSubmit}>
      <h3>{state.secilenKitap? "kitabı düzenle":"kitap ekle"}</h3>
      <select
        value={state.kitapKategori}
        onChange={(e) => dispatch({type:"kitapKategori",payload:e.target.value})}
      >
        <option value="">Kategori Seçiniz</option>
        <option value="">Yazılım</option>
        <option value="">Edebiyat</option>
        <option value="">Tarih</option>
        <option value="">Diğer</option>
      </select>
      <input
        value={state.kitapAdi}
        type="text"
        onChange={(e) => dispatch({type:"kitapAdi",payload:e.target.value})}
        placeholder="Kitap adı"
      />
      <input
        value={state.kitapYazari}
        type="text"
        onChange={(e) => dispatch({type:"kitapYazari",payload:e.target.value})}
        placeholder="Kitap Yazarı"
      />
      <input
        value={state.sayfaSayisi}
        type="number"
        onChange={(e) => dispatch({type:"sayfaSayisi",payload:e.target.value})}
        placeholder="Kitap Sayfa"
      />
      <input
        value={state.kitapResim}
        type="text"
        onChange={(e) => dispatch({type:"kitapResim",payload:e.target.value})}
        placeholder="Kitap Resmi(Url)"
      />
      <textarea
        value={state.kitapAciklama}
        placeholder="Kitap Açıklaması"
        onChange={(e) => dispatch({type:"kitapAciklama",payload:e.target.value})}
      ></textarea>
      <input
        disabled={
          !state.kitapAciklama.trim() ||
          !state.kitapAdi.trim() ||
          !state.kitapKategori === "Kategori Seçiniz" ||
          !state.kitapYazari.trim() ||
          !state.kitapResim.trim() ||
          !state.sayfaSayisi 
        } type="submit" value={state.secilenKitap? "düzenle":"ekle"}
      />
    </form>
  );
};

export default Form;
