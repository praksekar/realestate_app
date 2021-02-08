import React from 'react'
import { Form, Button, Container, Row, Col, Card, Alert } from "react-bootstrap";

export default function FormGenerator({ formObj, handleChange, button, header }) {
    let rows = []
    let cols = []


    Object.entries(formObj).forEach((field, index) => {
        cols.push(
            field[1].subHeader ? <Col xs sm md lg="12"><h3 className="text-center">{field[1].subHeader}</h3></Col> : null,
            < Form.Group key={index} className={field[1].className}>
                <Form.Label>{field[1].label}</Form.Label>
                <Form.Control type={field[1].type} name={field[0]} value={field[1].value} onChange={handleChange} />
            </Form.Group>
        )

        if (field[1].row) {
            console.log(field[0], field[1].row)
            rows.push(<Row>{cols}</Row>)
            cols = []
        }
    }
    )

    return (
        <div>
            {header && <h2 className="text-center">{header}</h2>}
            <Form>
                {rows}
                {button}
            </Form >
        </div>
    )
}

