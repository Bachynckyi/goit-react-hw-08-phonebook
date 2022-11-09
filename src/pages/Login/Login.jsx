import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "redux/auth/authOperations";
import scss from "./Login.module.scss";

export const LogIn = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = event => {
            const {name, value} = event.currentTarget;
            switch(name){
                case 'email': setEmail(value);
                  break;
                case 'password': setPassword(value);
                  break;
                default:
                  return;
            };
    }; 

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(authOperations.logIn({email, password}));
        reset();
    };

    const reset = () => {
        setEmail("");
        setPassword("");
    };

    return (
        <div className={scss.container}> 
            <h5 className={scss.title}>Please sign in</h5>
            <form onSubmit={handleSubmit} className={scss.form}>
            <div>
                <label className={scss.label}>Login
                    <input
                        className={scss.input}
                        type="email"
                        name="email"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        placeholder='Please enter login'
                        onChange={handleChange}
                        value={email}
                        />
                </label>
            </div>
            <div>
                <label className={scss.label}>Password
                    <input
                        className={scss.input}
                        type="password"
                        name="password"
                        placeholder='Please enter password'
                        onChange={handleChange}
                        value={password}
                        />
                </label>
            </div>
            <button type='submit' className={scss.buttonSignIn}>Sign In</button>
        </form>
        </div>
    );
};

export default LogIn;