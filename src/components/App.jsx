import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from "./Layout";
import { Home } from '../pages/Home/Home';
import { Register } from "pages/Register/Register";
import { LogIn } from "pages/Login/Login";
import { Contacts } from 'pages/Contacts/Contacts';

export const App = () => {
  return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101',
          }}
        >
        <Routes>
          <Route path='/' element={<Layout/>}>
              <Route path="home" index element={<Home/>}/>
              <Route path="register" element={<Register/>}/>
              <Route path="login" element={<LogIn/>}/>
              <Route path="contacts" element={<Contacts/>}/>
              <Route path="*" element={<Navigate to="/home"/>} />
          </Route>
        </Routes>
        </div>
        )
};






