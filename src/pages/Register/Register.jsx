import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from 'redux/auth/authOperations';

export const Register = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = event => {
            const {name, value} = event.currentTarget;
            switch(name){
                case 'name': setName(value);
                  break;
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
        dispatch(authOperations.register({name, email, password}));
        reset();
    };

    const reset = () => {
        setName("");
        setEmail("");
        setPassword("");
    };

    return (
        <div>
            <h1>Registration form</h1>
            <form onSubmit={handleSubmit}>
            <div>
                <label>Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        placeholder='Please enter name'
                        onChange={handleChange}
                        value={name}
                    />
                </label>
            </div>
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
            <button type='submit'>Sign Up</button>
        </form>
        </div>
    );
};
