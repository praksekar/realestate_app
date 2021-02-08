import React from 'react'
import { useUserData } from "../contexts/UserDataContext"
import MoneyBlock from "../components/MoneyBlock"

import NavigBar from "../components/NavigBar"
import AddProperty from './AddProperty'

export default function Home() {
    const { authUser, dbUserData } = useUserData()
    console.log("asdfasdfasdf", dbUserData)
    return (
        <div>
            <NavigBar />
            <AddProperty />
        </div>
    )
}
