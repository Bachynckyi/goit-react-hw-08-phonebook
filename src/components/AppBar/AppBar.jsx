import { AppNavigation } from "./AppNavigation/AppNavigation";
import { useSelector } from "react-redux";
import { AuthNav } from "components/AppBar/AuthNavigation/AuthNavigation";
import UserMenu  from "components/AppBar/UserMenu/UserMenu";
import authSelectors from "redux/auth/authSelectors";
import css from "./AppBar.module.scss";

export const AppBar = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <header className={css.header}>
            <nav className={css.navigation}>
            <AppNavigation/>
            <h1 className={css.headerTitle}>Your phonebook</h1>
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
            </nav>
        </header>
    );
};