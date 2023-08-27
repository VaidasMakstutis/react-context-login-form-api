import React, { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { LoginContext } from "../Contexts/LoginContext";

const Login = () => {
  const { setUserName, setShowProfile } = useContext(LoginContext);

  return (
    <div className="d-flex justify-content-center mt-5">
      <Form>
        <Form.Group className="pb-3">
          <Form.Control required type="text" name="username" placeholder="Username" onChange={event => setUserName(event.target.value)} />
        </Form.Group>
        <Form.Group className="pb-3">
          <Form.Control required type="password" name="password" placeholder="Password" />
        </Form.Group>
        <Button
          type="submit"
          className="btn btn-primary w-100"
          onClick={() => {
            setShowProfile(true);
          }}
        >
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
