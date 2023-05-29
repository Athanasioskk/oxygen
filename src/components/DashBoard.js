import "./styles/DashBoard.css";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";
import female from "../assets/images/female.svg";
import male from "../assets/images/male.svg";

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
  const LOGOUT_THRESHOLD = 2 * 60 * 60 * 1000; //2 hours in milliseconds
  const [qrCodeData, setQrCodeData] = useState("");
  const maleProfile = male;
  const femaleProfile = female;
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        setAuthUser(user);
        const userId = user.uid;

        class Users {
          constructor(username, gender, dob) {
            this.username = username;
            this.gender = gender;
            this.dob = dob;
          }
          toString() {
            return this.name + ", " + this.gender + ", " + this.dob;
          }
        }

        const userConverter = {
          toFirestore: (users) => {
            return {
              username: users.username,
              gender: users.gender,
              dob: users.dob,
            };
          },
          fromFirestore: (snapshot, options) => {
            const data = snapshot.data(options);
            return new Users(data.username, data.gender, data.dob);
          },
        };

        async function fetchData() {
          const docRef = doc(db, "users", userId).withConverter(userConverter);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setIsNewUser(false);
            const userData = docSnap.data();
            setFormData({
              username: userData.username,
              gender: userData.gender,
              dob: userData.dob,
            });
            console.log(docSnap.data());
            setQrCodeData(`${userData.username}\n${user.email}`);
            if (userData.gender == "Male") {
              setProfilePic(maleProfile);
            }
            if (userData.gender == "Female") {
              setProfilePic(femaleProfile);
            }
            history("/Profile/DashBoard");
          } else {
            setIsNewUser(true);
            history("/Profile/DashBoard/PersonalInfo");
          }
        }
        fetchData();
        const timer = setTimeout(() => {
          userSignOut();
        }, LOGOUT_THRESHOLD);
        return () => clearTimeout(timer);
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
              <div className="AnotherContainer">
                <div className="PictureAndName">
                  {/* <img src={profilePic} alt="Profle pic"></img> */}
                  <div className="Name">
                    Welcome to your profile, {formData.username}.
                  </div>
                </div>
                <div className="DataContainer">
                  <div className="DataDisplay">
                    <div className="Info">
                      <h1>Basic info</h1>
                      <label>Username:</label>
                      <input
                        type="text"
                        disabled={true}
                        placeholder={formData.username}
                      ></input>
                      <label>Gender:</label>
                      <input
                        type="text"
                        disabled={true}
                        placeholder={formData.gender}
                      ></input>
                      <label>Date of birth:</label>
                      <input
                        type="text"
                        disabled={true}
                        placeholder={formData.dob}
                      ></input>
                      <h1>Means of contact</h1>
                      <label>Email:</label>
                      <input
                        type="email"
                        disabled={true}
                        placeholder={authUser.email}
                      ></input>
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
                  <div className="RightContainer">
                    <div className="ShopingCart">
                      <h1>Your shopping cart</h1>
                      <span
                        class="material-symbols-outlined"
                        style={{ fontSize: "55px" }}
                      >
                        Shop
                      </span>
                    </div>
                    <div className="QRcode">
                      <div className="QrSubContainer">
                        <h1>Your unique QR code</h1>
                        <span
                          class="material-symbol-outlined"
                          style={{ fontSize: "15px" }}
                        >
                          dld
                        </span>
                      </div>
                      <QRCode value={qrCodeData} />
                    </div>
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
