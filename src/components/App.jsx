import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Suspense, useEffect, lazy } from "react";
import { PrivateRoute } from "pages/PrivateRoute";
import { PublicRoute } from "pages/PublicRoute";
import authOperations from "redux/auth/authOperations";
import authSelectors from "redux/auth/authSelectors";
import Layout from "./Layout";
import PageNotFound from "pages/PageNotFound/PageNotFound";

const Home = lazy(() => import('../pages/Home/Home'));
const Register = lazy(() => import('pages/Register/Register'));
const LogIn = lazy(() => import('pages/Login/Login'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));

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
        <Suspense fallback={null} >    
            <Routes>
              <Route path="/" element={<Layout/>}>
                  <Route index element={<Navigate to="/home"/>}/>
                  <Route path="home" element={<Home/>}/>
                  <Route path="/" element={<PublicRoute restricted />}>
                    <Route path="register" element={<Register/>}/>
                    <Route path="login" element={<LogIn/>}/>
                  </Route>
                  <Route element={<PrivateRoute />}>
                    <Route path="contacts" element={<Contacts/>}></Route>
                    </Route>
                  <Route path="*" element={<PageNotFound/>} />
                </Route>
            </Routes>
        </Suspense>
        </div>
        ))
};






