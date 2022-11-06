import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from "./Layout";
import { Home } from '../pages/Home/Home';
import { Register } from "pages/Register/Register";
import { LogIn } from "pages/Login/Login";
import { Contacts } from 'pages/Contacts/Contacts';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import authOperations from 'redux/auth/authOperations';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser())
  }, [dispatch]);

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
              <Route index element={<Navigate to="/home"/>}/>
              <Route path="home" element={<Home/>}/>
              <Route path="register" element={<Register/>}/>
              <Route path="login" element={<LogIn/>}/>
              <Route path="contacts" element={<Contacts/>}/>
              <Route path="*" element={<Navigate to="/home"/>} />
          </Route>
        </Routes>
        </div>
        )
};






