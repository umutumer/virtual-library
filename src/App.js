import "./App.css";
import Form from "./components/form/Form";
import CardList from "./components/card-list/CardList";
import Navbar from "./components/nav/Navbar";
import { DataProvider } from "./Context/DataContext";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function App() {


  return (
    <DataProvider>
      <ToastContainer />
      <Navbar />
      <Form />
      <CardList />
    </DataProvider>
  );
}

export default App;
