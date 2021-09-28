import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainNavBar from "./Components/NavBar/MainNavBar"
import Header from "./Components/Header/Header"
import Body from './Components/Body/Body';
import Posts from './Components/Body/Posts/Posts';
import Modal from './Components/Modal/Modal';
import { useState } from 'react';

function App() {

  const [openModal, setOpenModal] = useState(false);
 
  return (
    <div className="App">
      <MainNavBar setOpenModal={setOpenModal}/>
      <Header/>
      <Body setOpenModal={setOpenModal}>
        <Posts/>
      </Body>
      <Modal show={openModal} onHide={()=>setOpenModal(false)}/>
    </div>
  );
}

export default App;
