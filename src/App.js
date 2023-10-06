import "./App.css";
import Form from "./components/form/Form";
import CardList from "./components/card-list/CardList";
import Navbar from "./components/nav/Navbar";
import { useEffect, useState } from "react";

function App() {
  const [kitaplar, setKitaplar] = useState([]);
  const yeniKitap = (yeni) => {
    // setKitaplar([...kitaplar, yeni]);
    setKitaplar(prev => [...prev,yeni]);
  };

  const kitapSil = (id)=>{
    // setKitaplar(kitaplar.filter((kitap) => kitap.id !== id))
    setKitaplar(prev => prev.filter((kitap) => kitap.id !== id))
  }
  const kitaplariGetir = async () =>{
    let url = "http://localhost:3005/kitaplar";
    const response = await fetch(url);
    const kitaplar = await response.json();
    setKitaplar(kitaplar)
  }

  useEffect(() =>{
  kitaplariGetir()
  },[])

  return (
    <div className="App">
      <Navbar />
      <Form kitaplar={kitaplar} yeniKitap={yeniKitap} />
      <CardList kitapSil={kitapSil} kitaplar={kitaplar} />
    </div>
  );
}

export default App;
