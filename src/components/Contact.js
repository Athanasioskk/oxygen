import { useEffect, useState } from "react";
import "../components/styles/Contact.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import img2 from "../assets/images/img2.jpg";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  useMap,
  style,
  Marker,
  Popup,
} from "react-leaflet";

function Contact() {
  const [authUser, setAuthUser] = useState(null);
  const history = useNavigate();
  let location = useLocation();

  // useEffect(() => {
  //   const listen = onAuthStateChanged(getAuth(), (user) => {
  //     if (user) {
  //       setAuthUser(user);
  //       const userEmail = user.email;
  //       history("/Contact");
  //     } else {
  //       setAuthUser(null);
  //       history("/Contact/LoginPage");
  //     }
  //   });
  //   return () => listen();
  // }, []);

  return (
    <div className="ContactContainer">
      <div className="ContactInfo">
        <div className="Telephones">
          <h1>Give us a call</h1>
          <p>
            At Oxygen Gym, we pride ourselves on our ability to address all
            customer inquiries promptly and thoroughly. Our dedicated team is
            readily available to provide comprehensive assistance. Feel free to
            reach out to us anytime for unparalleled service.
            <br /> Call us now!
          </p>
          <li>+30 6900000000</li>
          <li>24640 31000</li>
        </div>
        <div className="Location">
          <h1>You can find us here</h1>
          <p>
            Located at 28 Octovriou in Servia, Kozani, finding our gym is a
            breeze. Our address is easily accessible, ensuring convenient
            navigation for all. Come visit us without any hassle and embark on
            your fitness journey with ease.
          </p>
          <MapContainer
            center={[40.1872, 22.0003]}
            zoom={14}
            scrollWheelZoom={false}
            style={{ width: "100%", height: "300px", border: "1px solid grey" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[40.187291, 22.000336]}>
              <Popup>We are here!</Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className="SocialMedia">
          <h1>We are also on Social Media</h1>
          <p>
            At Oxygen Gym, we're not only dedicated to your fitness goals but
            also keeping you connected. Follow us on Instagram and Facebook to
            stay updated with the latest news, promotions, and fitness
            inspiration. Join our vibrant online community today!
          </p>
          <li>Facebook</li>
          <li>Instagram</li>
        </div>
      </div>

      {/* {authUser ? ( */}
      {/* <div className="ContactContainer">
        <div className="ContactFormContainer">
          <form type="submit">
            <h2>You may also contact us directly via email.</h2>
            <label>From:</label>
            <input type="email" placeholder="example@email.com"></input>
            <label>To:</label>
            <input type="email" placeholder="example@email.com"></input>
            <input type="text" placeholder="Write something..."></input>
            <button>Send</button>
          </form>
          <Outlet />
        </div>
      </div> */}
      {/* ) : (
        <div>nigga</div>
      )} */}
    </div>
  );
}

export default Contact;
