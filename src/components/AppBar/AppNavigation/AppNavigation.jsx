import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import authSelectors from "redux/auth/authSelectors";
import css from "./AppNavigation.module.scss";

export const AppNavigation = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <div>
            <NavLink
                className={({ isActive }) => isActive ? `${css.active}`:`${css.link}`}
                to="home"
                key="home"
                >Home
            </NavLink>
            {isLoggedIn && (            
                <NavLink
                    className={({ isActive }) => isActive ? `${css.active}`:`${css.link}`}
                    to="contacts"
                    key="contacts"
                    >Contacts
            </NavLink>)}
        </div>)
};