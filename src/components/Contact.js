import { useEffect, useState } from "react";
import "../components/styles/Contact.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import "material-symbols";

function Contact() {
  const [authUser, setAuthUser] = useState(null);

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
          <div className="PhoneNumbers">
            <span
              class="material-symbols-outlined"
              style={{ fontSize: "55px" }}
            >
              DeskPhone
            </span>
            <li>+30 6900000000</li>
            <li>24640 31000</li>
          </div>
        </div>
        <div className="Location">
          <h1>You can find us here</h1>
          <p>
            Located at 28 Octovriou street in Servia, Kozani, finding our gym is
            a breeze. Our address is easily accessible, ensuring convenient
            navigation for all. Come visit us without any hassle and embark on
            your fitness journey with ease.
          </p>
          <MapContainer
            center={[40.1872, 22.0003]}
            zoom={14}
            scrollWheelZoom={false}
            style={{
              width: "300px",
              height: "300px",
              border: "1px solid grey",
            }}
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
          <div className="SocialMediaIcons">
            <a href="https://www.facebook.com/profile.php?id=100063588819880">
              <FontAwesomeIcon
                id="facebook"
                icon={faFacebook}
                style={{ color: "blue", fontSize: "55px" }}
              />
            </a>
            <a href="https://www.instagram.com/oxygen.fitness_health_center/">
              <FontAwesomeIcon
                id="instagram"
                icon={faInstagram}
                style={{
                  color: "white",
                  fontSize: "55px",
                  background: "rgb(131,58,180)",
                  background:
                    "linear-gradient(225deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
                  borderRadius: "25%",
                  padding: "3px",
                }}
              />
            </a>
          </div>
        </div>
      </div>
      {authUser ? (
        <div className="EmailForm">
          <h1>You may also contact us directly via email</h1>
          <form id="formEmail" type="submit">
            <label>From you.</label>
            <input
              type="email"
              disabled={true}
              placeholder={authUser.email}
            ></input>
            <label>To us.</label>
            <input
              type="email"
              disabled={true}
              placeholder="thanaseskouts@gmail.com"
            ></input>
            <label>Subject.</label>
            <input type="text" placeholder="Write something..."></input>
            <textarea type="text" placeholder="Write something..."></textarea>
            <button>Send</button>
          </form>
        </div>
      ) : (
        <div>empty</div>
      )}
    </div>
  );
}

export default Contact;
