import { React, useState } from "react";
import { useForm } from "../hooks/useForm";
import { Link, useHistory } from "react-router-dom";
import { Form, Button, Container, Row, Col, Card, Alert } from "react-bootstrap";
import { useUserData } from "../contexts/UserDataContext"

export default function Signup() {
    const [formValues, handleChange] = useForm({ username: "", password: "", confirmPassword: "" });
    const { signup, createNewDbUser } = useUserData();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(event) {
        event.preventDefault()
        if (formValues.confirmPassword !== formValues.password) {
            return setError('passwords dont match')
        }
        try {
            setError("")
            setLoading(true)
            await signup(formValues.username, formValues.password, { email: formValues.username, userPermission: "user" })
            history.push("/home")
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)
    }

    return (
        <Container>
            <Row className="justify-content-center">
                <Card >
                    <Card.Body>
                        <h2 className="text-center">Sign up</h2>
                        <Form>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name="username" value={formValues.username} onChange={handleChange} />
                            </Form.Group>

                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" value={formValues.password} onChange={handleChange} />
                            </Form.Group>

                            <Form.Group id="password">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" name="confirmPassword" value={formValues.confirmPassword} onChange={handleChange} />
                            </Form.Group>

                            {error !== "" && <Alert variant="danger">{error}</Alert>}

                            <Button className="w-100" onClick={handleSubmit} disabled={loading}>Sign up</Button>
                        </Form>
                        <b>Already have an account? <Link to='/login'>Log in</Link> </b>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    );
}
