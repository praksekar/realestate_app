import React from 'react'
import { Link } from "react-router-dom";
import LogoutButton from './LogoutButton'
import { Navbar, Nav } from "react-bootstrap"
import { useUserData } from "../contexts/UserDataContext"


function NavigBar() {

    const { authUser } = useUserData()
    return (
        <Navbar bg="dark">
            <h4 style={{ color: "red" }}>Welcome, {authUser && authUser.uid}</h4>
            <Nav.Item className="ml-auto">
                <LogoutButton />
            </Nav.Item>

        </Navbar>
    )
}

export default NavigBar

