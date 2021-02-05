import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useUserData } from "../contexts/UserDataContext"

export default function PrivateRoute({ component: Component, ...rest }) {
    const { authUser } = useUserData()

    return (
        <Route
            {...rest}
            render={props => {
                return authUser ? <Component {...props} /> : <Redirect to='/login' />
            }}
        ></Route>
    )
}
