import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";

import TokenContext from '../Contexts/TokenContext.js';
import NameContext from '../Contexts/NameContext.js';


export default function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {setToken} = useContext(TokenContext);
    const {setName} = useContext(NameContext);
    
    const navigate = useNavigate();

    function enter(){
        console.log("ola")
        const body = {email, password}

        const promise = axios.post('https://mywallet31.herokuapp.com/login', body)
        promise.then(response => {
            setToken(response.data.token)
            setName(response.data.userName)
            navigate('/home')
        })
        promise.catch(error =>{
            console.log(error) 
            alert("Usuário ou senha incorretos")
        })                      
        
    }

    return(
        <Content>
            <h1>MyWallet</h1>
            <Input placeholder="E-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required></Input>
            <Input placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required></Input>
            <Button onClick={enter}>Entrar</Button>
            <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
        </Content>

    )
}

const Content = styled.div`
    width: 100%;
    height: 100vh;
    padding-left: 25px;
    padding-right: 25px;
    background-color: #8B11BE;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    h1{
        font-size: 32px;
        font-weight: 400;
        font-family: 'Saira Stencil One', cursive;
        color: #FFFFFF;
    }

    a{
        color: #FFFFFF;
        font-size: 14px;
        font-weight: bold;
    }
`

const Input = styled.input`
    width: 100%;
    height: 58px ;
    border-radius: 5px;
    border:none;
    background: #FFFFFF;
    padding: 10px;
    margin-bottom: 13px;
    font-size: 20px;
    
    Input::placeholder{
        color: black;
    }
`

const Button = styled.button`
    width: 100%;
    height: 46px ;
    border-radius: 5px;
    border:none;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    background-color: #A329D6;
    color: #FFFFFF;     
    margin-bottom : 40px;
`

