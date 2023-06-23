import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './index.css';
import Home from './home/Home';
import Signup from './signup/Signup';
import Login from './login/Login';
import Profile from './profile/Profile'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Home />}/>
            <Route path={"/signup"} element={<Signup/>}/>
            <Route path={"/login"} element={<Login />}/>
            <Route path={"/profile"} element={<Profile/>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
