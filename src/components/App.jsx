import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Register } from "pages/Register/Register";
import { LogIn } from "pages/Login/Login";
import { Contacts } from 'pages/Contacts/Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { Suspense, useEffect } from 'react';
import authOperations from 'redux/auth/authOperations';
import authSelectors from 'redux/auth/authSelectors';
import Layout from './Layout';
import { PrivateRoute } from 'pages/PrivateRoute';
import { PublicRoute } from 'pages/PublicRoute';

export const App = () => {
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser())
  }, [dispatch]);

  return (
        !isRefreshing && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}>
        <Suspense fallback={null}>    
            <Routes>
              <Route path="/" element={<Layout />}>
                  <Route path="home" index element={<Home/>}/>
                  <Route path="/" element={<PublicRoute restricted />}>
                    <Route path="register" element={<Register/>}/>
                    <Route path="login" element={<LogIn/>}/>
                  </Route>
                  <Route element={<PrivateRoute />}>
                    <Route path="contacts" element={<Contacts/>}></Route>
                    </Route>
                  <Route path="*" element={<Navigate to="/home"/>} />
                </Route>
            </Routes>
        </Suspense>
        </div>
        ))
};






