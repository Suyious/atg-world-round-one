import { Alert, Modal } from "react-bootstrap";
import "./Modal.css";
import Illustration from "../../assets/Illustration.png";
import Login from "./Login";
import Signup from "./Signup";

const AuthModal = (props) => {

  const {setOpenModal, setModalLogin, modalLogin, setLoginStatus, setGroupJoin} = props;

  const HandleLogin = () => {
    setGroupJoin(true);
    setOpenModal(false);
    setLoginStatus(true);
  }

  const AuthHandle = ({ status }) => {
    if (status === true) return <Login modalLogin={modalLogin} setModalLogin={setModalLogin} HandleLogin={HandleLogin}/>;
    if (status === false) return <Signup modalLogin={modalLogin} setModalLogin={setModalLogin} HandleLogin={HandleLogin}/>;
  };

  return (
    <div className="AuthModal">
      <Modal
        className="modal_wrapper"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Alert className="modal_alert" variant="success">
          Let's learn, share & inspire each other with our passion for computer
          engineering. Sign up now 🤘🏼
        </Alert>
        <Modal.Body className="modal_body">
          <div className="modal_body_div modal_body_left">
            <AuthHandle status={modalLogin} />
          </div>
          <div className="modal_body_div modal_body_right">
            {!modalLogin?<p className="modal_right_text text_top">
              Already have an account?{" "}
              <span onClick={() => setModalLogin(!modalLogin)} className="auth_switch">Sign In</span>
            </p>:
            <p className="modal_right_text text_top">
              Don’t have an account yet?{" "}
              <span onClick={() => setModalLogin(!modalLogin)} className="auth_switch"> Create new for free!</span>
            </p>}
            <img src={Illustration} alt="illustration" />
            <p className="modal_right_text text_bottom">
              By signing up, you agree to our Terms & conditions, Privacy policy
            </p>
          </div>
        </Modal.Body>
        <div className="modal_cancel" onClick={props.onHide}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M14 2.33331C7.54838 2.33331 2.33337 7.54831 2.33337 14C2.33337 20.4516 7.54838 25.6666 14 25.6666C20.4517 25.6666 25.6667 20.4516 25.6667 14C25.6667 7.54831 20.4517 2.33331 14 2.33331ZM19.8334 18.1883L18.1884 19.8333L14 15.645L9.81171 19.8333L8.16671 18.1883L12.355 14L8.16671 9.81164L9.81171 8.16665L14 12.355L18.1884 8.16665L19.8334 9.81164L15.645 14L19.8334 18.1883Z" fill="#E0E0E0" /></svg>
        </div>
      </Modal>
    </div>
  );
};

export default AuthModal;
