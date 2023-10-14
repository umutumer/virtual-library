import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
//constext oluşturma
const DataContext = createContext();
//context e bir sağlayıcı oluşturuşur
export const DataProvider = ({ children }) => {
    //tüm state ve metotlar buraya gelecek
    const [kitaplar, setKitaplar] = useState([]);
    const [kategoriler,setKategoriler] = useState([]);
    const [secilenKategori,setSecilenKategori] = useState("");
    const [secilenKitap,setSecilenKitap] = useState(null);
    const [search,setSearch] =useState("");
  
  
    const kitapEkleDuzenle = async (yeni) => {
      let url ="http://localhost:3005/kitaplar/";
      if (!secilenKitap) {
      const response = await axios.post(url,yeni)
     if (response.status === 201) {
      setKitaplar(prev => [...prev,yeni]);
      toast.success('Yeni Kitap Eklendi !', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
     }
      }else{
        url += `${secilenKitap.id}`;
        const response2 = await axios.put(url,yeni)
        console.log(response2);
        setSecilenKitap(null)
        toast.warn('Kitap Düzenlendi !', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
      }
      
      
    };
  
    const kitapSil = async (id)=>{
      let url = `http://localhost:3005/kitaplar/${id}`;
      const response = await axios.patch(url,{isDeleted: true})
      if (response.status === 200) {
        setKitaplar(prev => prev.filter((kitap) => kitap.id !== id))
        toast.error('Kitap Silindi !', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
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
  
    const cardDuzenle = async (id) =>{
      let url = `http://localhost:3005/kitaplar/${id}`;
      const response = await axios.get(url)
      const duzenlenecekKitap = response.data
      setSecilenKitap(duzenlenecekKitap)
    }
  
    useEffect(() =>{
    kitaplariGetir()
    kategorileriGetir()
    //eslint-disable-next-line
    },[secilenKategori,secilenKitap])


  //Formdan gelenler
  const [kitapAdi, setKitapAdi] = useState("");
  const [kitapKategori, setKitapKategori] = useState("Kategori Seçiniz");
  const [kitapYazari, setKitapYazari] = useState("");
  const [sayfaSayisi, setSayfaSayisi] = useState("");
  const [kitapResim, setKitapResim] = useState("");
  const [kitapAciklama, setKitapAciklama] = useState(``);
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
  return <DataContext.Provider value={
    {
        kitapAdi,
        kitapYazari,
        kitapResim,
        kitapKategori,
        kitapAciklama,
        sayfaSayisi,
        setKitapAdi,
        setKitapYazari,
        setKitapResim,
        setKitapKategori,
        setKitapAciklama,
        setSayfaSayisi,
        cardDuzenle,
        kitaplar,
        kitapSil,
        secilenKitap,
        kitapEkleDuzenle,
        kategoriler,
        setSecilenKategori,
        secilenKategori,
        handleSubmit,
        search,
        setSearch
    }
  }>
            {children}
         </DataContext.Provider>;
};


export default DataContext;