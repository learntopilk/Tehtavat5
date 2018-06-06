import React from 'react'

const Login = (props) => {
    return (
        <div>
            <h4>Please log in</h4>
            <form action="/api/login">
                <div><span>username: <input type="text" name="username" /></span></div>
                <div><span>password: <input type="password" name="password" /></span></div>
            </form>

        </div>
    )
}

export default Login