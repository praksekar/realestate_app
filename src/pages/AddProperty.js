import React, { useState } from 'react'
import { useForm } from "../hooks/useForm"
import { Form, Button, Container, Row, Col, Card, Alert } from "react-bootstrap"
import FormGenerator from "../components/FormGenerator"

export default function AddProperty() {

    const [formValues, handleChange] = useForm({
        propertyName: { label: "Property Name", value: '', type: "text", className: "col-md-12", row: true, subHeader: "Property Details" },


        purchasePrice: { label: "Purchase Price", value: '', type: "text", className: "col-md-6" },
        renovationCost: { label: "Renovation Cost", value: '', type: "text", className: "col-md-6", row: true },

        downPayment: { label: "Down Payment", value: '', type: "text", className: "col-md-6" },
        closingCosts: { label: "Closing Costs", value: '', type: "text", className: "col-md-6", row: true },

        yearsToPayOff: { label: "Years to Pay Off", value: '', type: "text", className: "col-md-6" },
        interestRate: { label: "Interest Rate", value: '', type: "text", className: "col-md-6", row: true },


        rentalIncome: { label: "Rental Income", value: '', type: "text", className: "col-md-4", subHeader: "Monthly Income" },
        utilitiesIncome: { label: "Utilities Income", value: '', type: "text", className: "col-md-4" },
        vacancy: { label: "Vacancy", value: '', type: "text", className: "col-md-4", row: true },


        maintainence: { label: "Maintainence", value: '', type: "text", className: "col-md-4", subHeader: "Yearly Expenses" },
        management: { label: "Management", value: '', type: "text", className: "col-md-4" },
        utilitiesExpenses: { label: "Utilities Expenses", value: '', type: "text", className: "col-md-4", row: true },

        insurance: { label: "Insurance", value: '', type: "text", className: "col-md-4" },
        propertyTaxes: { label: "Property Taxes", value: '', type: "text", className: "col-md-4" },
        additionalExpenses: { label: "Additional Expenses", value: '', type: "text", className: "col-md-4", row: true },
    })

    const button = <Button className="w-100">Add Property</Button>

    return (
        <Container>
            <FormGenerator formObj={formValues} handleChange={handleChange} button={button} header="Add Property" />
        </Container>
    )
}
