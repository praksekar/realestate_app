import React, { useEffect, createContext, useContext, useState } from 'react'
import { db } from "../firebase"
import { useAuth } from "../contexts/AuthContext";

const UserDataContext = createContext()

export function useUserData() {
    return useContext(UserDataContext)
}

export default function UserDataProvider({ children }) {

    const [userData, setUserData] = useState({})
    const [loading, setLoading] = useState(false)
    const { currentUser } = useAuth();


    function createNewDatabaseUser(data) {
        return db.collection("users").doc(currentUser.uid).set(data).then(() => setUserData(data))
    }

    function getUserData() {
        console.log("aaaaaaaaaa")
        console.log(currentUser.uid)
        return db.collection("users").doc(currentUser.uid).get().then(doc => {
            console.log("dataasdfasfd", doc.data())
            setUserData(doc.data())
        })
        //console.log(docRef)
    }


    useEffect(() => {
        //setUserData({})
    }, [currentUser])


    const value = { userData, createNewDatabaseUser, getUserData };

    return (
        <UserDataContext.Provider value={value}>
            {!loading && children}
        </UserDataContext.Provider>
    )
}
