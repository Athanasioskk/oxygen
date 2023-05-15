import { Route, Navigate, Outlet } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import DashBoard from './DashBoard';

function PrivateRoute({ path, ...props }) {

    const auth = getAuth();

    function isAuthenticated() {

        const currentUser = auth.currentUser;
        return currentUser ? <Outlet /> : <Navigate to="/Profile/DashBoard" />
    }

    return (
        <Route path="/Profile" element={isAuthenticated}>
            <Route path="/Profile/DashBoard" element={<DashBoard />} />
        </Route>
    );
}

export default PrivateRoute;
