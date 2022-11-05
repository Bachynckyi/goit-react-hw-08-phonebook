// import { ContactForm } from "./ContactForm/ContactForm";
// import { ContactList } from './ContactList/Contactlist'; 
// import { Filter } from "./Filter/Filter";
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from "./Layout";
import { Home } from '../pages/Home/Home';
import { Register } from "pages/Register/Register";
import { LogIn } from "pages/Login/Login";

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
              <Route path="*" element={<Navigate to="/home"/>} />
          </Route>
        </Routes>
          {/* <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <h1 style={{marginTop: '20px', marginBottom: '20px'}}>Phonebook</h1>
            <ContactForm/>
            <h2 style={{marginTop: '20px', marginBottom: '20px'}}>Contacts</h2>
            <Filter/>
            <ContactList/> */}
          {/* </div> */}
        </div>
        )
};






