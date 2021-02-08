import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useUserData } from "../contexts/UserDataContext"

export default function PublicRoute({ component: Component, ...rest }) {
    const { authUser } = useUserData()

    return (
        <Route
            {...rest}
            render={props => {
                return authUser ? <Redirect to='/home' /> : <Component {...props} />
            }}
        ></Route>
    )
}