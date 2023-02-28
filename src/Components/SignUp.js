import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmation, setConfirmation] = useState("");

    const navigate = useNavigate();


    function register(e){

        e.preventDefault()

        const body = {name, email, password, confirmation}

        console.log(body)

        const promise = axios.post('https://mywallet-fbe0.onrender.com/signup', body)
        promise.then(response => {
            navigate("/")
        })
        promise.catch(error => {
            console.log(error)
            alert("Usuário ou senha ja cadastrados.")

        })
    }
    return(
        <Content onSubmit={register}>
            <h1>MyWallet</h1>
            <Input placeholder="Nome"  type="text" value={name} onChange={(e) => setName(e.target.value)} required></Input>
            <Input placeholder="E-mail"  type="email" value={email} onChange={(e) => setEmail(e.target.value)} required></Input>
            <Input placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required></Input>
            <Input placeholder="Confirme a senha" type="password" value={confirmation} onChange={(e) => setConfirmation(e.target.value)} required></Input>
            <Button type="submit">Cadastrar</Button>
            <Link to="/">Já tem uma conta? Entre agora!</Link>          

        </Content>
    )
}

const Content = styled.form`
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
    margin-bottom: 13px;
    padding: 10px;
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