import { Button, Col, Form, Row } from "react-bootstrap";
import Facebook from "../../assets/facebook.png"
import Google from "../../assets/google.png"

const Signup = ({HandleLogin}) => {
  return (
    <div className="modal_signup">
      <h3 className="modal_auth_title">Create Account</h3>
      <Form>
        <Row>
          <Col className="no_padding_right">
            <Form.Control className="no_border_bottom no_border_right" placeholder="First name" />
          </Col>
          <Col className="no_padding_left">
            <Form.Control className="no_border_bottom" placeholder="Last name" />
          </Col>
        </Row>
        <Form.Control
          className="no_border_bottom"
          type="email"
          placeholder="Email"
        />
        <Form.Control
          className="no_border_bottom"
          type="password"
          placeholder="Password"
        />
        <Form.Control
          type="password"
          placeholder="Confirm Password"
        />
        <Button onClick={()=>HandleLogin()} className="modal_button main">Create Account</Button>
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

export default Signup;
