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
      <div className="newPost_overlay">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.6588 3C17.4088 3 17.1488 3.1 16.9588 3.29L15.1288 5.12L18.8788 8.87L20.7088 7.04C21.0988 6.65 21.0988 6.02 20.7088 5.63L18.3688 3.29C18.1688 3.09 17.9188 3 17.6588 3ZM14.0588 9.02L14.9788 9.94L5.91878 19H4.99878V18.08L14.0588 9.02ZM2.99878 17.25L14.0588 6.19L17.8088 9.94L6.74878 21H2.99878V17.25Z" fill="white"/></svg>
      </div>
    </div>
  );
}

export default App;
