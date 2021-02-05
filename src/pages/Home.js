import React from 'react'
import LogoutButton from "../components/LogoutButton"
import { useUserData } from "../contexts/UserDataContext"

import NavigBar from "../components/NavigBar"

export default function Home() {
    const { userData } = useUserData()
    return (
        <div>
            <NavigBar />
            <b>welcome home</b>
        </div>
    )
}
