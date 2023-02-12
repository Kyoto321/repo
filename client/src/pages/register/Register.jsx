import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post("/auth/register", {
                username,
                email,
                password,
            });
            res.data && window.location.replace("/");
        } catch(err) {
            setError(true);
        }
    };

    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <h3>Suscribe to our newsletter</h3>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label className="registerFormLabel">Username</label>
                <input className="registerFormInput" type="text" placeholder="Enter your username" onChange={(e) => setUsername(e.target.value)}></input>
                <label className="registerFormLabel">Email</label>
                <input className="registerFormInput" type="text" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}></input>
                <label className="registerFormLabel">Password</label>
                <input className="registerFormInput" type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}></input>
                <button className="registerButton" type="submit">Register</button>
            </form>
            <button className="registerLoginButton">
                <Link className="link" to="/login">
                    Login
                </Link>
            </button>
            {error && <span style={{color:"green", marginTop:"10px"}}>Something went wrong. Try login.</span>}
        </div>
    );
}