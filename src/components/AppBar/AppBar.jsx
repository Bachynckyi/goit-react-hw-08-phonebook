import { AppNavigation } from "./AppNavigation/AppNavigation";
import { useSelector } from "react-redux";
import { AuthNav } from "components/AppBar/AuthNavigation/AuthNavigation";
import UserMenu  from "components/AppBar/UserMenu/UserMenu";
import authSelectors from "redux/auth/authSelectors";
import scss from "./AppBar.module.scss";

export const AppBar = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <header className={scss.header}>
            <nav className={scss.navigation}>
            <AppNavigation/>
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
            </nav>
        </header>
    );
};