import { Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "./LoginPage";
import Profile from "./Profile";
import Modal from "./Modal";

function ModalSwitch() {

    let location = useLocation();
    let background = location.state && location.state.background;


    return (
        <>
            <Routes location={background || location}>
                <Route exact path="/Profile" element={<Profile />} />
                <Route path="/Profile/LoginPage" element={<LoginPage />} />
            </Routes>
            {background && <Route path="/Profile/LoginPage" element={<Modal />} />}
        </>
    )
}

export default ModalSwitch;