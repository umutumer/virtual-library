import axios from "axios";
import { createContext, useEffect, useReducer} from "react";
import { toast } from "react-toastify";
import { initialState, reducer } from "../reducer/Reducer";
//constext oluşturma
const DataContext = createContext();
//context e bir sağlayıcı oluşturuşur
export const DataProvider = ({ children }) => { 
  const [state,dispatch] =useReducer(reducer,initialState)
    const kitapEkleDuzenle = async (yeni) => {
      let url ="http://localhost:3005/kitaplar/";
      if (!state.secilenKitap) {
      const response = await axios.post(url,yeni)
     if (response.status === 201) {
      dispatch({type:"kitapEkle",yeni})
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
        url += `${state.secilenKitap.id}`;
        const response2 = await axios.put(url,yeni)
        console.log(response2);
        dispatch({type:"kitapDüzenle"})
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
        dispatch({type:"kitapSil",id})
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
      if (state.secilenKategori && state.secilenKategori !== "Tüm Kitaplar") {
        url+="?kitapKategori="+state.secilenKategori
      }
      const response = await fetch(url);
      const kitaplar = await response.json();
      dispatch({type:"kitapGetir",payload:kitaplar})
    }
    const kategorileriGetir = async () =>{
      let url ="http://localhost:3005/kategoriler";
      const response = await axios.get(url)
      const kategoriler = response.data
      dispatch({type:"kategoriGetir",payload:kategoriler})
    }
  
    const cardDuzenle = async (id) =>{
      let url = `http://localhost:3005/kitaplar/${id}`;
      const response = await axios.get(url)
      const duzenlenecekKitap = response.data
      dispatch({type:"secilenKitap",payload:duzenlenecekKitap})
    }
  
    useEffect(() =>{
    kitaplariGetir()
    kategorileriGetir()
    //eslint-disable-next-line
    },[state.secilenKategori,state.secilenKitap])


  //Formdan gelenler

  const handleSubmit = (e) => {
    e.preventDefault();
    kitapEkleDuzenle({
      id: state.kitaplar.length + 1,
      kitapAdi: state.kitapAdi,
      kitapKategori: state.kitapKategori,
      kitapYazari: state.kitapYazari,
      sayfaSayisi: state.sayfaSayisi,
      kitapResim: state.kitapResim,
      kitapAciklama: state.kitapAciklama,
    });
    dispatch({type:"resetForm"})
    
  };
  const handleClickKategori = (kategoriAdı) =>{ 
    dispatch({type:"secilenKategori",payload:kategoriAdı})
  }
  return <DataContext.Provider value={
    {
        
        cardDuzenle,
        kitapSil,
        kitapEkleDuzenle,
        handleSubmit,
        state,
        dispatch,
        handleClickKategori
    }
  }>
            {children}
         </DataContext.Provider>;
};


export default DataContext;