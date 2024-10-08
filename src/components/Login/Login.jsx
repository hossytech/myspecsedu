import "./Login.css"
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login({ setIsLoggedIn }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const dummyUsername = 'user'
        const dummyPassword = 'pass'

        if (username === dummyUsername && password === dummyPassword) {
            setIsLoggedIn(true)
            navigate('/')
        } else {
            alert('Invalid login credentials')
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin} className="login-form">
                <h2>Login</h2>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
                <p><br />Testing logins <br /> <br />Username: user <br />Password: pass</p>
            </form>
        </div>
    );
}

export default Login
