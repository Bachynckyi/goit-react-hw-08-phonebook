import { useSelector } from "react-redux";
import { Navigate, Outlet} from "react-router-dom";
import { authSelectors } from '../redux/auth/authSelectors';

export const PublicRoute = ({ restricted }) => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const shouldRedirect = isLoggedIn && restricted;
    return shouldRedirect ? <Navigate to="/contacts" /> : <Outlet />; 
};