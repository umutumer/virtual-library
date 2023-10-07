import "./App.css";
import Form from "./components/form/Form";
import CardList from "./components/card-list/CardList";
import Navbar from "./components/nav/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [kitaplar, setKitaplar] = useState([]);
  const [kategoriler,setKategoriler] = useState([]);
  const [secilenKategori,setSecilenKategori] = useState("");
  const yeniKitap = async (yeni) => {
    let url ="http://localhost:3005/kitaplar";
    const response = await axios.post(url,yeni)
   if (response.status === 201) {
    setKitaplar(prev => [...prev,yeni])
   }
  };

  const kitapSil = async (id)=>{
    let url = `http://localhost:3005/kitaplar/${id}`;
    const response = await axios.patch(url,{isDeleted: true})
    if (response.status === 200) {
      setKitaplar(prev => prev.filter((kitap) => kitap.id !== id))
    }
    
  }
  const kitaplariGetir = async () =>{
    let url = "http://localhost:3005/kitaplar";
    if (secilenKategori && secilenKategori !== "Tüm Kitaplar") {
      url+="?kitapKategori="+secilenKategori
    }
    const response = await fetch(url);
    const kitaplar = await response.json();
    setKitaplar(kitaplar)
  }
  const kategorileriGetir = async () =>{
    let url ="http://localhost:3005/kategoriler";
    const response = await axios.get(url)
    const kategoriler = response.data
    setKategoriler(kategoriler)
  }

  useEffect(() =>{
  kitaplariGetir()
  kategorileriGetir()
  //eslint-disable-next-line
  },[secilenKategori])

  

  return (
    <div className="App">
      <Navbar secilenKategori={secilenKategori} setSecilenKategori={setSecilenKategori} kategoriler={kategoriler} />
      <Form kitaplar={kitaplar} yeniKitap={yeniKitap} />
      <CardList kitapSil={kitapSil} kitaplar={kitaplar} />
    </div>
  );
}

export default App;
