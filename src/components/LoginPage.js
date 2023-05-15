import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import "./styles/SignUpPage.css";

function LoginPage() {

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useNavigate();
    let location = useLocation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const LogIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError("")
                setLoading(true)
                console.log(userCredential);
                const user = userCredential.user;
                history(`/Profile/DashBoard`);
            })
            .catch((error) => {
                setError("Failed to log in!")
                console.log(error)
            });
        setLoading(false);
    };


    return (
        <div className="OuterContainer">
            <div className="FormContainer">
                <div className="ButtonClose">
                    <button onClick={() => history("/Profile")}>Close</button>
                </div>

                <form className="Form" onSubmit={LogIn}>
                    <h2>Log in here</h2>
                    {error && <div className="ErrorContainer">{error}</div>}
                    <label>Email</label>
                    <input type="email" placeholder="example@mail.com" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <label>Password</label>
                    <input type="password" placeholder="123example" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <button disabled={loading} type="submit">Submit</button>
                </form>
                <div className="SignInContainer">
                    <h4>Need an account?</h4>
                    <Link to={{ pathname: `/Profile/SignUpPage`, state: { background: location } }}>
                        <p>Click here to Sign up</p>
                    </Link>
                    <Outlet />
                </div>
            </div>
        </div>

    )
}

export default LoginPage