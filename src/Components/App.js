import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from '../Components/Login.js';
import SignUp from '../Components/SignUp.js';
import Home from '../Components/Home.js';
import GlobalStyle from '../Components/globalStyle.js';


export default function App(){
    return(
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<SignUp />} />
                    <Route path="/home" element={<Home/>} />
                </Routes>
            </BrowserRouter>        
        </>
    )
}