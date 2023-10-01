import "./App.css";
import Data from "./data/data";
import Form from "./components/form/Form";
import CardList from "./components/card-list/CardList";
import Navbar from "./components/nav/Navbar";
import { useState } from "react";

function App() {
  const [kitaplar, setKitaplar] = useState(Data);
  const yeniKitap = (yeni) => {
    // setKitaplar([...kitaplar, yeni]);
    setKitaplar(prev => [...prev,yeni]);
  };

  const kitapSil = (id)=>{
    // setKitaplar(kitaplar.filter((kitap) => kitap.id !== id))
    setKitaplar(prev => prev.filter((kitap) => kitap.id !== id))
  }

  useState();

  return (
    <div className="App">
      <Navbar />
      <Form kitaplar={kitaplar} yeniKitap={yeniKitap} />
      <CardList kitapSil={kitapSil} kitaplar={kitaplar} />
    </div>
  );
}

export default App;
