import "./styles/Footer.css"
import { useNavigate } from "react-router-dom";

function Footer() {

    const navigate = useNavigate();

    return (
        <div className="FooterContainer">
            <div className="LeftContainer">
                <ul>
                    <li>contact</li>
                    <li>Location</li>
                    <li>Store/cart</li>
                </ul>
            </div>
            <div className="MiddleContainer">credits</div>
            <div className="RightContainer">
                <a>Log in/out</a>
            </div>
        </div>
    )
}

export default Footer;

