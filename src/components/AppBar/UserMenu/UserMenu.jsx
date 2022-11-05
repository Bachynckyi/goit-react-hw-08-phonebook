import { useSelector, useDispatch } from "react-redux";
import authSelectors from 'redux/auth/authSelectors';
import authOperation from 'redux/auth/authOperations';

export default function UserMenu () {
    const name = useSelector(authSelectors.getUserName);
    const dispatch = useDispatch();
    return (
        <div>
            <p>Welcome - {name}!!!</p>
            <button type="button" onClick={() => dispatch(authOperation.logOut())}>Log Out</button>
      </div>    
    );
};