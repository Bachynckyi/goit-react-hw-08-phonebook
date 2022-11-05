import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from 'redux/auth/authOperations';

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
        <div>
            <h1>Please sign in</h1>
            <form onSubmit={handleSubmit}>
            <div>
                <label>Login
                    <input
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
                <label>Password
                    <input
                        type="password"
                        name="password"
                        required
                        placeholder='Please enter password'
                        onChange={handleChange}
                        value={password}
                        />
                </label>
            </div>
            <button type='submit'>Sign In</button>
        </form>
        </div>
    );
};
