import { React, useState } from "react";
import { useForm } from "../hooks/useForm";
import { useUserData } from "../contexts/UserDataContext";
import { Link, useHistory } from "react-router-dom";
import FormGenerator from "../components/FormGenerator"

import { Form, Button, Container, Row, Col, Card, Alert } from "react-bootstrap";

export default function Login() {

  const { login, getUserDbData } = useUserData()
  const [formValues, handleChange] = useForm({
    "username": { label: "Email", value: '', type: "email", className: "" },
    "password": { label: "Password", value: '', type: "password", className: "" }
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const button = <Button className="w-100" onClick={handleSubmit} disabled={loading}>Log in</Button>


  async function handleSubmit(event) {
    event.preventDefault()
    try {
      setError("")
      setLoading(true)
      await login(formValues.username.value, formValues.password.value)
      history.push("/home")
    } catch {
      setError("Failed to sign in")
    }
    setLoading(false)
  }

  return (
    < Container >
      <Row className="justify-content-center">
        <Card >
          <Card.Body>
            <FormGenerator formObj={formValues} handleChange={handleChange} button={button} header="Log in" />
            {error !== "" && <Alert variant="danger">{error}</Alert>}
            <b>Don't have an account? <Link to='/signup'>Sign up</Link> </b>
          </Card.Body>
        </Card>
      </Row>
    </Container >
  );
}

/*     <Form>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="username" value={formValues.username} onChange={handleChange} />
              </Form.Group>

              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={formValues.password} onChange={handleChange} />
              </Form.Group>
<Button className="w-100" onClick={handleSubmit} disabled={loading}>Log in</Button>
{error !== "" && <Alert variant="danger">{error}</Alert>}
            </Form>*/