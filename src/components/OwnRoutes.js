import Home from "../components/Home.js";
import QandA from "./QandA.js";
import Programs from "../components/Programs.js";
import Subscriptions from "../components/Subscriptions.js";
import Contact from "../components/Contact.js";
import Profile from "../components/Profile";
import DashBoard from "../components/DashBoard.js";
// import ModalSwitch from "./ModalSwitch.js";
import Modal1 from "./Modal1.js";
import Modal2 from "./Modal2.js";
import Modal3 from "./Modal3.js";
import { Routes, Route, useLocation } from 'react-router-dom';

function OwnRoutes() {

    let location = useLocation();
    let background = location.state && location.state.background;

    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/QandA" element={<QandA />} />
                <Route path="/Programs" element={<Programs />} />
                <Route path="/Subscriptions" element={<Subscriptions />} />
                <Route path="/Contact" element={<Contact />} />
                {/* <Route path="/Profile/DashBoard" element={<DashBoard />} /> */}
            </Routes>
            <Routes location={background || location}>
                <Route exact path="/Profile" element={<Profile />}>
                    <Route path="/Profile/LoginPage" element={<Modal1 />} />
                    <Route path="/Profile/SignUpPage" element={<Modal2 />} />
                </Route>
            </Routes>
            <Routes location={background || location}>
                <Route exact path="/Profile/DashBoard" element={<DashBoard />}>
                    <Route path="/Profile/DashBoard/PersonalInfo" element={<Modal3/>} />
                </Route>
            </Routes>
            {background &&
                <Routes>
                    <Route path="/Profile/LoginPage" element={<Modal1 />} />
                    <Route path="/Profile/SignUpPage" element={<Modal2 />} />
                    <Route path="/Profile/DashBoard/PersonalInfo" element={<Modal3/>} />
                </Routes>
            }
        </>
    )
}

export default OwnRoutes