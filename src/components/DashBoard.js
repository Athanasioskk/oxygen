import "./styles/DashBoard.css";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

function DashBoard() {
  const [authUser, setAuthUser] = useState(null);
  const [isNewUser, setIsNewUser] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    gender: "",
    dob: "",
  });
  const history = useNavigate();
  let location = useLocation();

  useEffect(() => {
    const listen = onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        setAuthUser(user);
        const userId = user.uid;

        async function fetchData() {
          const docRef = doc(db, "users", userId);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setIsNewUser(false);
            setFormData({
              username: docSnap.data("username").toString(),
              gender: docSnap.data("gender").toString(),
              dob: docSnap.data("dob").toString(),
            });
            console.log(docSnap.data());
            history("/Profile/DashBoard");
          } else {
            setIsNewUser(true);
            history("/Profile/DashBoard/PersonalInfo");
          }
        }
        fetchData();
      } else {
        setIsNewUser(false);
        setAuthUser(null);
        history("/Profile");
      }
    });
    return () => listen();
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Loged out successfully");
        history("/Profile");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="DashBoardContainer">
      <div className="FirstContainer">
        <div className="NameContainer">
          {authUser ? (
            <>
              <p>Your are now logged in</p>
              <div className="DataContainer">
                <div className="DataDisplay">
                  <div className="Info">
                    <p>{`${formData.username}`}</p>
                    <p>{`${formData.gender}`}</p>
                    <p>{`${formData.dob}`}</p>
                  </div>
                  <div className="Link">
                    <Link
                      to={{
                        pathname: `/Profile/DashBoard/PersonalInfo`,
                        state: { background: location },
                      }}
                    >
                      <p>Click here to update your Info</p>
                    </Link>
                    <Outlet />
                  </div>
                </div>
              </div>
              <button onClick={userSignOut}>Log Out</button>
            </>
          ) : (
            <p>Logged Out</p>
          )}
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default DashBoard;
