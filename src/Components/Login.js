import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { LoginContext } from "../Contexts/LoginContext";

const Login = () => {
  const { setUserName, userName, setShowProfile } = useContext(LoginContext);

  const [showMessage, setShowMessage] = useState(false);
  const [values, setValues] = useState({
    username: "",
    password: ""
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = event => {
    console.log("handleChange -> " + event.target.name + " : " + event.target.value);

    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
    setUserName(values.username);
  };

  const validate = () => {
    console.log("Validate the form....");

    let errors = {};

    //username field
    if (!values.username) {
      errors.username = "Username is field required";
    }

    //password field
    if (!values.password) {
      errors.password = "Password field is required";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }

    if (validate(values)) {
      setShowMessage(true);
      setShowProfile(true);
    } else {
      setShowMessage(false);
    }
  };

  console.log("errors", formErrors);
  console.log("show profile", userName);
  console.log("Values", values);

  return (
    <div className="d-flex justify-content-center mt-5">
      <Form onSubmit={handleSubmit}>
        <div>
          <p>{showMessage}</p>
        </div>
        <Form.Group className="pb-3">
          <Form.Control
            type="text"
            name="username"
            placeholder="Username"
            value={values.username}
            // onChange={event => setUserName(event.target.value)}
            // onChange={event => {
            //   setUserName(event.target.value);
            //   handleChange();
            // }}
            onChange={handleChange}
          />
          {formErrors.username && <p className="text-danger">{formErrors.username}</p>}
        </Form.Group>
        <Form.Group className="pb-3">
          <Form.Control type="password" name="password" placeholder="Password" value={values.password} onChange={handleChange} />
          {formErrors.password && <p className="text-danger">{formErrors.password}</p>}
        </Form.Group>
        <Button
          type="submit"
          className="btn btn-primary w-100"
          // onClick={() => {
          //   setShowProfile(true);
          // }}
        >
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
