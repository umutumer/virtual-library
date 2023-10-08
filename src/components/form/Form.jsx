import React, { useEffect, useState } from "react";
import "./Form.scss";

const Form = ({ secilenKitap, kitapEkleDuzenle, kitaplar }) => {
  const [kitapAdi, setKitapAdi] = useState("");
  const [kitapKategori, setKitapKategori] = useState("Kategori Seçiniz");
  const [kitapYazari, setKitapYazari] = useState("");
  const [sayfaSayisi, setSayfaSayisi] = useState("");
  const [kitapResim, setKitapResim] = useState("");
  const [kitapAciklama, setKitapAciklama] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    kitapEkleDuzenle({
      id: kitaplar.length + 1,
      kitapAdi: kitapAdi,
      kitapKategori: kitapKategori,
      kitapYazari: kitapYazari,
      sayfaSayisi: sayfaSayisi,
      kitapResim: kitapResim,
      kitapAciklama: kitapAciklama,
    });
    setKitapAdi("");
    setKitapKategori("Kategori Seçiniz");
    setKitapResim("");
    setKitapYazari("");
    setSayfaSayisi("");
    setKitapAciklama("");
  };
  useEffect(() => {
    if (secilenKitap) {
      setKitapKategori(secilenKitap.kitapKategori);
      setKitapAdi(secilenKitap.kitapAdi);
      setKitapYazari(secilenKitap.kitapYazari);
      setKitapResim(secilenKitap.kitapResim);
      setSayfaSayisi(secilenKitap.sayfaSayisi);
      setKitapAciklama(secilenKitap.kitapAciklama);
    }
  }, [secilenKitap]);
  return (
    <form onSubmit={handleSubmit}>
      <h3>{secilenKitap? "kitabı düzenle":"kitap ekle"}</h3>
      <select
        value={kitapKategori}
        onChange={(e) => setKitapKategori(e.target.value)}
      >
        <option value="">Kategori Seçiniz</option>
        <option value="">Yazılım</option>
        <option value="">Edebiyat</option>
        <option value="">Tarih</option>
        <option value="">Diğer</option>
      </select>
      <input
        value={kitapAdi}
        type="text"
        onChange={(e) => setKitapAdi(e.target.value)}
        placeholder="Kitap adı"
      />
      <input
        value={kitapYazari}
        type="text"
        onChange={(e) => setKitapYazari(e.target.value)}
        placeholder="Kitap Yazarı"
      />
      <input
        value={sayfaSayisi}
        type="number"
        onChange={(e) => setSayfaSayisi(e.target.value)}
        placeholder="Kitap Sayfa"
      />
      <input
        value={kitapResim}
        type="text"
        onChange={(e) => setKitapResim(e.target.value)}
        placeholder="Kitap Resmi(Url)"
      />
      <textarea
        value={kitapAciklama}
        placeholder="Kitap Açıklaması"
        onChange={(e) => setKitapAciklama(e.target.value)}
      ></textarea>
      <input
        disabled={
          !kitapAciklama.trim() ||
          !kitapAdi.trim() ||
          !kitapKategori === "Kategori Seçiniz" ||
          !kitapYazari.trim() ||
          !kitapResim.trim() ||
          !sayfaSayisi 
        } type="submit" value={secilenKitap? "düzenle":"ekle"}
      />
    </form>
  );
};

export default Form;
