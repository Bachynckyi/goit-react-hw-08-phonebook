import { useSelector, useDispatch } from "react-redux";
import authSelectors from "redux/auth/authSelectors";
import authOperation from "redux/auth/authOperations";
import iconUser from "./logo192.png";
import scss from "./UserMenu.module.scss";

export default function UserMenu () {
    const name = useSelector(authSelectors.getUserName);
    const dispatch = useDispatch();
    return (
        <div className={scss.container}> 
            <p className={scss.userWelcome}>Welcome - 
                <span className={scss.userName}> {name} </span>
            </p>
            <img src={iconUser} alt="iconUser" className={scss.iconUser}/>
            <button className={scss.logOutButton} type="button" onClick={() => dispatch(authOperation.logOut())}>Log Out</button>
      </div>    
    );
};