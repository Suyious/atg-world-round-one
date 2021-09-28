import { Alert, Button, Modal } from "react-bootstrap";
import "./Modal.css"
import Illustration from "../../assets/Illustration.png"
import Login from "./Login";
import Signup from "./Signup";

const AuthModal = (props) => {

  const AuthHandle = ({status}) => {
    if(status==="login")return <Login/>
    if(status==="signup")return <Signup/>
  }

  return (
    <div className="AuthModal">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
          <Alert className="modal_alert" variant="success">
            Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
          </Alert>
        <Modal.Body className="modal_body">
          <div className="modal_body_div modal_body_left"><AuthHandle status="signup"/></div>
          <div className="modal_body_div modal_body_right">
            <p className="modal_right_text text_top">Already have an account? <span className="auth_switch">Sign In</span></p>
            <img src={Illustration} alt="illustration"/>
            <p className="modal_right_text text_bottom">By signing up, you agree to our Terms & conditions, Privacy policy</p>
          </div>
        </Modal.Body>
        <Button onClick={props.onHide}>Close</Button>
      </Modal>
    </div>
  );
};

export default AuthModal;
