import React from 'react'
import { useUserData } from "../contexts/UserDataContext"

import NavigBar from "../components/NavigBar"

export default function Home() {
    const { authUser } = useUserData()
    return (
        <div>
            <NavigBar />
            <b>welcome home</b>
        </div>
    )
}
