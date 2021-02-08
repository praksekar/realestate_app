import React, { useEffect, createContext, useContext, useState } from 'react'
import { auth, db } from "../firebase"

const UserDataContext = createContext()

export function useUserData() {
    return useContext(UserDataContext)
}

export default function UserDataProvider({ children }) {

    const [loading, setLoading] = useState(false)
    const [authUser, setAuthUser] = useState({})
    const [dbUserData, setDbUserData] = useState({})

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setAuthUser(user)
            setLoading(false)
        })
        return unsubscribe;
    }, [])

    function signup(username, password, data) {
        return auth.createUserWithEmailAndPassword(username, password)
            .then((cred) => db.collection("users").doc(cred.user.uid).set(data))
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
            .then((cred) => db.collection("users").doc(cred.user.uid).get())
            .then(doc => setDbUserData(doc.data()))
    }


    function logout() {
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email) {
        return authUser.updateEmail(email)
    }

    function updatePassword(password) {
        return authUser.updatePassword(password)
    }

    function createNewDbUser(data) {
        return db.collection("users").doc(authUser.uid).set(data)
    }

    function getUserDbData() {
        return db.collection("users").doc(authUser.uid).get().then(doc => {
            console.log("dataasdfasfd", doc.data())
            setDbUserData(doc.data())
        }).catch((err) => console.err(err))
    }

    const value = { dbUserData, createNewDbUser, getUserDbData, getUserDbData, authUser, signup, login, logout };

    return (
        <UserDataContext.Provider value={value}>
            {!loading && children}
        </UserDataContext.Provider>
    )
}
