import React, { useState } from "react"
import { useHistory } from 'react-router-dom'
import { Button } from "react-bootstrap";
import { useUserData } from "../contexts/UserDataContext"

export default function LogoutButton() {

    const history = useHistory()
    const { logout } = useUserData()
    const [error, setError] = useState("")

    async function handleLogout() {
        setError('')
        try {
            await logout()
            history.push('/login')
        } catch {
            setError('Failed to log out')
        }

    }
    return (
        <Button variant="light" type="submit" value="Logout" onClick={handleLogout}> Logout </Button>
    )
}
