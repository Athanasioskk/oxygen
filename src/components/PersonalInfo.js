import "./styles/PersonalInfo.css";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PersonalInfo() {
  const history = useNavigate();
  const [error, setError] = useState("");
  const [authUser, setAuthUser] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    gender: "",
    dob: "",
  });

  const [loading, setLoading] = useState(false);
  const [disableClose, setDisableClose] = useState(false);

  useEffect(() => {
    const listen = onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        setAuthUser(user);
        const userId = user.uid;

        async function fetchData() {
          const docRef = doc(db, "users", userId);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setDisableClose(false);
          } else {
            setDisableClose(true);
          }
        }
        fetchData();
      } else {
        setAuthUser(null);
      }
    });
    return () => listen();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.username.length <= 4) {
      return setError("Failed to update changes, username is too short!");
    }
    if (formData.gender === "" || formData.gender === "--Select Gender--") {
      return setError("Failed to update changes, please choose gender!");
    }
    if (formData.dob === "") {
      return setError("Failed to update changes, choose a date of birth!");
    }
    setLoading(true);
    const userId = authUser.uid;
    const userRef = doc(db, "users", userId);
    try {
      await setDoc(
        userRef,
        {
          username: formData.username,
          gender: formData.gender,
          dob: formData.dob,
        },
        { merge: true }
      ); // Use {merge: true} to update only the fields that were changed
      setError("");
      console.log("User info updated in Firestore");
      setLoading(false);
      history("/Profile/DashBoard", { replace: true });
    } catch (error) {
      console.error("Error updating user info:", error);
      setLoading(false);
    }
  };

  return (
    <div className="PersonalInfo">
      <div className="ButtonClose">
        <button
          disabled={disableClose}
          onClick={() => history("/Profile/DashBoard")}
        >
          Close
        </button>
      </div>

      {authUser && (
        <form onSubmit={handleSubmit}>
          <div className="ErrorContainer">{error}</div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          ></input>
          <label>Email:</label>
          <input
            type="email"
            placeholder={authUser.email}
            disabled={true}
          ></input>
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">--Select Gender--</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <label>Date of birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          ></input>
          <button disabled={loading} type="submit">
            Submit changes
          </button>
        </form>
      )}
    </div>
  );
}

export default PersonalInfo;
