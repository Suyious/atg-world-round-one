import { Button, Form } from "react-bootstrap";
import Facebook from "../../assets/facebook.png"
import Google from "../../assets/google.png"

const Login = ({HandleLogin, modalLogin, setModalLogin}) => {
  return (
    <div className="modal_login">
      <h3 className="modal_auth_title">Sign In</h3>
      <Form>
        <Form.Control
          className="no_border_bottom"
          type="email"
          placeholder="Email"
        />
        <Form.Control
          type="password"
          placeholder="Password"
        />
        <div className="button_group">
          <Button onClick={()=>HandleLogin()} className="modal_button main">Sign In</Button>
          <p onClick={() => setModalLogin(!modalLogin)} className="button_group_switch hide_on_mobile"> or, Create Account</p>
        </div>
      </Form>
      <Button onClick={()=>HandleLogin()} className="modal_button sec" variant="outline-dark">
        <img src={Facebook} alt="facebook" />
        &#160;&#160;Sign up with Facebook</Button>
      <Button onClick={()=>HandleLogin()} className="modal_button sec" variant="outline-dark">
        <img src={Google} alt="google" />
        &#160;&#160;Sign up with Google</Button>
      <p className="text_bottom forgot_password">Forgot Password?</p>
    </div>
  );
};

export default Login;
