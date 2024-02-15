import "./styles/DashBoard.css";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { collection, doc, getDoc, query, getDocs } from "firebase/firestore";
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

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const listen = onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        setAuthUser(user);
        const userId = user.uid;

        class Users {
          constructor(username, gender, dob, email) {
            this.username = username;
            this.gender = gender;
            this.dob = dob;
            this.email = email;
          }
          toString() {
            return this.name + ", " + this.gender + ", " + this.dob + ", " + this.email;
          }
        }

        const userConverter = {
          toFirestore: (users) => {
            return {
              username: users.username,
              gender: users.gender,
              dob: users.dob,
              email: users.email,
            };
          },
          fromFirestore: (snapshot, options) => {
            const data = snapshot.data(options);
            return new Users(data.username, data.gender, data.dob, data.email);
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
              email: userData.email,
            });
            console.log(docSnap.data());
            setQrCodeData(`${userData.username}\n${user.email}`);
            if (userData.gender === "Male") {
              setProfilePic(maleProfile);
            }
            if (userData.gender === "Female") {
              setProfilePic(femaleProfile);
            }
            history("/Profile/DashBoard");
          } else {
            setIsNewUser(true);
            history("/Profile/DashBoard/PersonalInfo");
          }
        }

        fetchData();

        async function getUsers() {
          const q = query(collection(db, "users"));
          const querySnapshot = await getDocs(q);
          const users = [];
          querySnapshot.forEach((doc) => {
            console.log(doc.id, doc.data());
            const userData = doc.data();
            users.push({
              id: doc.id,
              name: userData.username,
              gender: userData.gender,
              dob: userData.dob,
              email: userData.email,
            });
          });
          setUserList(users);
        }

        getUsers();
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
          {authUser && authUser.email !== "admin@email.com" ? (
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
                    <div className="Inbox">
                      <h1>Check your Inbox</h1>
                      <span
                        class="material-symbols-outlined"
                        style={{ fontSize: "55px" }}
                      >
                        Inbox
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
          ) : (authUser && authUser.email === "admin@email.com" ? (
            <>
              <div>
                <p>Welcome admin</p>
              </div>
              <div className="ListOfUsers">
                <h1>List of Users</h1>
                <table className="UserTable">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Gender</th>
                      <th>Date of Birth</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userList.map((user) => (
                      <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.gender}</td>
                        <td>{user.dob}</td>
                        <td>{user.email}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button onClick={userSignOut}>Log Out</button>
            </>
          ) : (
            <p>Logged Out</p>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default DashBoard;
