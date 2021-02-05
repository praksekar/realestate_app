import React from 'react'
import { Link } from "react-router-dom";
import LogoutButton from './LogoutButton'
import { Navbar } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"


function NavigBar() {

    const { currentUser } = useAuth()
    return (
        <Navbar bg="dark">
            <LogoutButton />
            <h1 style={{ color: "red" }}>Welcome, {currentUser && currentUser.email}</h1>
        </Navbar>
    )
}

export default NavigBar

