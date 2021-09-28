import { Button, Form } from "react-bootstrap";

const Login = () => {
  return (
    <div className="modal_login">
      <h3 className="modal_auth_title">Sign In</h3>
      <Form>
        <Form.Control
          type="email"
          placeholder="name@example.com"
        />
        <Form.Control
          type="password"
          placeholder="Password"
        />
        <Button className="modal_button">Sign Up</Button>
      </Form>
    </div>
  );
};

export default Login;
