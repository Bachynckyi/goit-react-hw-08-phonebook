import { useSelector, useDispatch } from "react-redux";
import authSelectors from 'redux/auth/authSelectors';
import authOperation from 'redux/auth/authOperations';
import css from './UserMenu.module.scss';

export default function UserMenu () {
    const name = useSelector(authSelectors.getUserName);
    const dispatch = useDispatch();
    return (
        <div className={css.container}> 
            <p className={css.userWelcome}>Welcome - 
                <span className={css.userName}> {name} </span>!</p>
            <button className={css.logOutButton} type="button" onClick={() => dispatch(authOperation.logOut())}>Log Out</button>
      </div>    
    );
};