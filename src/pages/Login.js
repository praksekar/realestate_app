import { React, useState } from "react";
import { useForm } from "../hooks/useForm";
import { useUserData } from "../contexts/UserDataContext";
import { Link, useHistory } from "react-router-dom";

import { Form, Button, Container, Row, Col, Card, Alert } from "react-bootstrap";

export default function Login() {
  const { login, getUserDbData } = useUserData()
  const [formValues, handleChange] = useForm({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      setError("")
      setLoading(true)
      await login(formValues.username, formValues.password)
      console.log("boba")
      console.log("boba2")
      history.push("/home")
    } catch {
      setError("Failed to sign in")
      console.log("failed")
    }
    setLoading(false)
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Card >
          <Card.Body>
            <h2 className="text-center">Log in</h2>
            <Form>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="username" value={formValues.username} onChange={handleChange} />
              </Form.Group>

              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={formValues.password} onChange={handleChange} />
              </Form.Group>

              {error !== "" && <Alert variant="danger">{error}</Alert>}

              <Button className="w-100" onClick={handleSubmit} disabled={loading}>Log in</Button>
            </Form>
            <b>Don't have an account? <Link to='/signup'>Sign up</Link> </b>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}
