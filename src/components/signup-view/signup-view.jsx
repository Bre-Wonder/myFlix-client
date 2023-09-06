import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const SignUpView = ({onSignedUp}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday
    };

  fetch("https://bre-wonder-cinema-app-8704977a1a65.herokuapp.com/users", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }).then((response) => response.json())
    .then((user) => {
      if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      onSignedUp(user);
      alert("Signup Successful");
      } else {
        alert("SignUp Failed");
      }
    });

      console.log('Signup Happened');
    }


return (
  <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formUsername">
        <Form.Label>Username: </Form.Label>
        <Form.Control
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          minLength="3"
        />
    </Form.Group>

    <Form.Group controlId="formPassword">
      <Form.Label>Password: </Form.Label>
      <Form.Control
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      </Form.Group>

    <Form.Group controlId="formEmail">
      <Form.Label>Email: </Form.Label>
      <Form.Control
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        />
    </Form.Group>

    <Form.Group controlId="formBirthday">
      <Form.Label>Birthday: </Form.Label>
      <Form.Control
        type="date"
        value={birthday}
        onChange={(e) => setBirthday(e.target.value)}
        required
        />
    </Form.Group>
    <br/>
    <Button varient="primary" type="submit">Sign Up</Button>
  </Form>
  );
};