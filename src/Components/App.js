import {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import GlobalStyle from '../Components/globalStyle.js';
import Login from '../Components/Login.js';
import SignUp from '../Components/SignUp.js';
import Home from '../Components/Home.js';
import Income from '../Components/Income.js';
import Outcome from '../Components/Outcome.js';
import TokenContext from '../Contexts/TokenContext.js';
import NameContext from '../Contexts/NameContext.js';

export default function App(){

    const [token, setToken] = useState("");
    const [name, setName] = useState("");

    return(
        <TokenContext.Provider value={{token, setToken,}}>
            <NameContext.Provider value={{name, setName}}>
                <GlobalStyle />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/cadastro" element={<SignUp />} />
                        <Route path="/home" element={<Home/>} />
                        <Route path="/income" element={<Income/>} />
                        <Route path="/outcome" element={<Outcome/>} />
                    </Routes>
                </BrowserRouter>    
            </NameContext.Provider>
        </TokenContext.Provider>
    )
}