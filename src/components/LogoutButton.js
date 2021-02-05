import React, { useState } from "react"
import { useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Button } from "react-bootstrap";

export default function LogoutButton() {

    const history = useHistory()
    const { logout } = useAuth()
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
