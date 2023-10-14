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

    default:
      break;
  }
};
