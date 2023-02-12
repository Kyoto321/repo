import axios from "axios";
import { useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css"

export default function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type:"LOGIN_START"});
        try {
            const res = await axios.post("auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            });
            dispatch({ type:"LOGIN_SUCCESS", payload: res.data })
        }catch(err){
            dispatch({ type:"LOGIN_FAILURE" })

        }
    };

    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label className="loginFormLabel">Username</label>
                <input className="loginFormInput" type="text" placeholder="Enter your username" ref={userRef}></input>
                <label className="loginFormLabel">Password</label>
                <input className="loginFormInput" type="text" placeholder="Enter your password" ref={passwordRef}></input>
                <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
            </form>
            <button className="loginRegisterButton">
                <Link className="link" to="/register">Register</Link>
            </button>
        </div>
    );
}