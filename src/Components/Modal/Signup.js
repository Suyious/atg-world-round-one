import { Button, Col, Form, Row } from "react-bootstrap";

const Signup = () => {
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
          placeholder="name@example.com"
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
        <Button className="modal_button">Create Account</Button>
      </Form>
    </div>
  );
};

export default Signup;
