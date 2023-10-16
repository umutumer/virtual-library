export const initialState = {
  kitaplar: [],
  kategoriler: [],
  secilenKategori: "",
  secilenKitap: null,
  kitapAdi: "",
  kitapYazari: "",
  kitapResim: "",
  kitapKategori: "Kategori Seçiniz",
  kitapAciklama: ``,
  sayfaSayisi: "",
  search: "",
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "kitapGetir":
      return {
        ...state,
        kitaplar: action.payload,
      };
    case "kitapAdi":
      return {
        ...state,
        kitaplar: action.payload,
      };
    case "kitapYazari":
      return {
        ...state,
        kitaplar: action.payload,
      };
    case "kitapKategori":
      return {
        ...state,
        kitaplar: action.payload,
      };
    case "kitapAciklama":
      return {
        ...state,
        kitaplar: action.payload,
      };
    case "kitapResim":
      return {
        ...state,
        kitaplar: action.payload,
      };
    case "sayfaSayisi":
      return {
        ...state,
        kitaplar: action.payload,
      };

    case "kategoriGetir":
      return {
        ...state,
        kategoriler: action.payload,
      };
    case "resetForm":
      return {
        ...state,
        kitapAdi: "",
        kitapYazari: "",
        kitapResim: "",
        kitapKategori: "Kategori Seçiniz",
        kitapAciklama: ``,
        sayfaSayisi: ""
      };
    case "search":
      return {
        ...state,
        search:action.payload
      };
    case "kitapSil":
      const kitapGuncelle =state.kitaplar.filter(kitap =>kitap.id !== action.id)
      return {
        ...state,
        kitaplar:kitapGuncelle
      };
    case "secilenKategori":
      return {
        ...state,
        secilenKategori:action.payload
      };
    case "kitapEkle":
      const kitapEkle =[...state.kitaplar,action.yeni]
      return {
        ...state,
        kitaplar:kitapEkle
      };
    case "kitapDuzenle":
      return {
        ...state,
        secilenKitap:null
      };
    case "secilenKitap":
      return {
        ...state,
        kitapAdi:action.payload.kitapAdi,
        kitapYazari:action.payload.kitapYazari,
        kitapAciklama:action.payload.kitapAciklama,
        kitapResim:action.payload.kitapResim,
        kitapKategori:action.payload.kitapKategori,
        sayfaSayisi:action.payload.sayfaSayisi,
        secilenKitap:action.payload
      };

    default:
      return state
  }
};
