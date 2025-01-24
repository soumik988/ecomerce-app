import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom"
const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem("user");
        if (auth) {
            navigate("/")
        }

    }, [])
    const handleLogin = async () => {
        console.warn("email,password", email, password)
        let result = await fetch("http://localhost:3006/login", {
            method: "post",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        result = await result.json();
        console.warn(result)
        if (result.auth) {
            localStorage.setItem('user', JSON.stringify(result.user));
            localStorage.setItem('token', JSON.stringify(result.user));
            navigate("/")

        } else {
            alert("please enter correct details")
        }
    }
    return (
        <div className="login">
            <input type="text" className="inputBox" placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)} value={email} />
            <input type="password" className="inputBox" placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)} value={password} />
            <button onClick={handleLogin} className="appButton" type="button">Login</button>

        </div>
    )
}
export default Login