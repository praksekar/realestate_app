import React from 'react'
import { Link } from "react-router-dom";
import LogoutButton from './LogoutButton'
import { Navbar } from "react-bootstrap"
import { useUserData } from "../contexts/UserDataContext"


function NavigBar() {

    const { authUser } = useUserData()
    console.log("authUser", authUser)
    return (
        <Navbar bg="dark">
            <LogoutButton />
            <h1 style={{ color: "red" }}>Welcome, {authUser && authUser.uid}</h1>
        </Navbar>
    )
}

export default NavigBar

