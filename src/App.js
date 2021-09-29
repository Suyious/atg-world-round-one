import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainNavBar from "./Components/NavBar/MainNavBar";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import Posts from "./Components/Body/Posts/Posts";
import Modal from "./Components/Modal/Modal";
import { useState } from "react";
import MobileNav from "./Components/NavBar/MobileNav";

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  const [groupJoin, setGroupJoin] = useState(false);

  const [openModal, setOpenModal] = useState(false);
  const [modalisLogin, setModalisLogin] = useState(false);

  return (
    <div className="App">
      <MainNavBar
        setOpenModal={setOpenModal}
        setModalLogin={setModalisLogin}
        loginStatus={loginStatus}
        setLoginStatus={setLoginStatus}
      />
      <MobileNav setOpenModal={setOpenModal} groupJoin={groupJoin} setGroupJoin={setGroupJoin} loginStatus={loginStatus}/>
      <Header/>
      <Body
        setOpenModal={setOpenModal}
        groupJoin={groupJoin}
        setGroupJoin={setGroupJoin}
        loginStatus={loginStatus}
      >
        <Posts />
      </Body>
      <Modal
        show={openModal}
        setOpenModal={setOpenModal}
        onHide={() => setOpenModal(false)}
        modalLogin={modalisLogin}
        setModalLogin={setModalisLogin}
        setLoginStatus={setLoginStatus}
        setGroupJoin={setGroupJoin}
      />
    </div>
  );
}

export default App;
