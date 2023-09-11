import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Login = () => {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [login] = useMutation(LOGIN_USER);

  //Update value of input
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  //Subit Form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await login({
        variables: { ...userFormData },
      });
      //Check if data was retrieved
      if (!data) {
        throw new Error("something went wrong!");
      }

      Auth.login(data.login.token);
      console.log(data);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert}>
          Login Error
        </Alert>

        {/* Email Input */}
        <Form.Group>
          <Form.Label htmlFor="email">Email:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type="invalid">
            email required
          </Form.Control.Feedback>
        </Form.Group>

        {/* Password Input */}
        <Form.Group>
          <Form.Label htmlFor="password">Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type="invalid">
            password required
          </Form.Control.Feedback>
        </Form.Group>
        {/* Only clickable when fields have content */}
        <Button
          disabled={!(userFormData.email && userFormData.password)}
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Login;
