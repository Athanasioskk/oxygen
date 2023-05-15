// import SignUpPage from "./SignUpPage";
import "./styles/Profile.css";
import { Link, useLocation, Outlet, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";

function Profile() {
    let location = useLocation();
    const [authUser, setAuthUser] = useState(null);
    const history = useNavigate();

    useEffect(() => {
        const listen = onAuthStateChanged(getAuth(), (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });
        return () => listen();
    }, []);

    useEffect(() => {
        if (authUser) {
            history("/Profile/DashBoard");
        }
    }, [authUser]);

    return (
        <div className="ProfileOverAllContainer">
            <div className="HeaderContainer">
                <h4>Here you can create your own Profile</h4>
                <p>Bellow you will find Sections that you can fill, in order to create and set up your own profile</p>
            </div>
            {authUser ? (
                <Outlet />
            ) : (
                <div className="LoginContainer">
                    <h5>To continue you need first to Log in</h5>
                    <Link to={{ pathname: `/Profile/LoginPage`, state: { background: location } }}>
                        <p>Click here to Log in</p>
                    </Link>
                    <Outlet />
                </div>
            )}
        </div>
    );
}

export default Profile;