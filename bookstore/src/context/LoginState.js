import LoginContext from './loginContext'
import { useState, useEffect } from 'react'

const LoginState = (props) => {
    const [login, setLogin] = useState(false)
    localStorage.setItem("isLoggedIn", login)
    localStorage.getItem("isLoggedIn")
    return (
        <LoginContext.Provider value={{ login, setLogin }} >
            {props.children}
        </LoginContext.Provider>
    )
}

export default LoginState