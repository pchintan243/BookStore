import LoginContext from './loginContext'
import { useState } from 'react'

const LoginState = (props) => {
    const [login, setLogin] = useState(false)
    return (
        <LoginContext.Provider value={{ login, setLogin }} >
            {props.children}
        </LoginContext.Provider>
    )
}

export default LoginState