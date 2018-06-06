import React from 'react'

const Login = ({state, handleLoginFieldChange, login}) => {
    return (
        <div>
            <h4>Please log in</h4>
            <form onSubmit={login}>
                <div><span>username: <input type="text" name="username" onChange={handleLoginFieldChange} value={state.username} /></span></div>
                <div><span>password: <input type="password" name="password" onChange={handleLoginFieldChange} value={state.password} /></span></div>
                <button type="submit">login</button>
            </form>

        </div>
    )
}

export default Login