import { useState } from "react";
import "./styles/SignUpPage.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate, useLocation, Outlet } from "react-router-dom";

function SignUpPage() {

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const history = useNavigate()
    let location = useLocation();

    const SignUp = (e) => {
        e.preventDefault();
        if (password !== passwordConfirm) {
            return setError('Passwords do not match!');
        };

        if (password.length <= 6) {
            return setError('Password must be longer than 6 characters!');
        };

        createUserWithEmailAndPassword(auth, email, password, passwordConfirm)
            .then((userCredential) => {
                setError("");
                setLoading(true);
                const user = userCredential.user;
                history(`/Profile/LoginPage`, { state: { background: location } });
                console.log(userCredential);
            })
            .catch((error) => {
                setError("Failed to create an account!");
                console.log(error);
            });
        setLoading(false);
    }

    return (
        <div className="OuterContainer">
            <div className="FormContainer">
                <div className="ButtonClose">
                    <button onClick={() => history("/Profile")}>Close</button>
                </div>

                <form className="Form" onSubmit={SignUp}>
                    <h2>Sign up here</h2>
                    {error && <div className="ErrorContainer">{error}</div>}
                    <label>Email</label>
                    <input type="email" placeholder="example@mail.com" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <label>Password</label>
                    <input type="password" placeholder="123example" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <label>Password Confirmation</label>
                    <input type="password" placeholder="123example" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)}></input>
                    <button disabled={loading} type="submit">Submit</button>
                </form>
                <div className="SignInContainer">
                    <h4>Already have an account?</h4>
                    <Link to={{ pathname: `/Profile/LoginPage`, state: { background: location } }}>
                        <p>Click here to Sign in</p>
                    </Link>
                    <Outlet />
                </div>
            </div>
        </div>
    )

}

export default SignUpPage;
