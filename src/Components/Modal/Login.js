import { Button, Form } from "react-bootstrap";
import Facebook from "../../assets/facebook.png"
import Google from "../../assets/google.png"

const Login = ({HandleLogin}) => {
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
        <Button onClick={()=>HandleLogin()} className="modal_button main">Sign In</Button>
      </Form>
      <Button onClick={()=>HandleLogin()} className="modal_button sec" variant="outline-dark">
        <img src={Facebook} alt="facebook" />
        &#160;&#160;Sign up with Facebook</Button>
      <Button onClick={()=>HandleLogin()} className="modal_button sec" variant="outline-dark">
        <img src={Google} alt="google" />
        &#160;&#160;Sign up with Google</Button>
    </div>
  );
};

export default Login;
