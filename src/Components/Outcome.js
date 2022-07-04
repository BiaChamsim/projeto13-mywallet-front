import styled from "styled-components";
import { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router";

import TokenContext from '../Contexts/TokenContext.js';

export default function Outcome(){

    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");
    const {token, setToken} = useContext(TokenContext);

    const navigate = useNavigate(); 

    function postOutcome(){
        const body = {
            value: value,
            description: description
        }
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const promise = axios.post('https://mywallet31.herokuapp.com/outcome', body, config)
        promise.then( response => {
            navigate("/home")
            console.log(promise)
        })
        promise.catch(error => {
            console.log(error)
        })
    }

    return(
        <Content>
            <Header>
                <h2>Nova saída</h2>
            </Header>
            <Container>
                <Input placeholder="Valor" type="number" value={value} onChange={(e) => setValue(e.target.value)}></Input>
                <Input placeholder="Descrição" type="text" value={description} onChange={(e) => setDescription(e.target.value)}></Input>
                <Button onClick={postOutcome}>Salvar saída</Button>
            </Container>
        </Content>
    )
}

const Content = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #8B11BE;
    display: flex;
    flex-direction: column;    
    align-items: center;
`

const Header = styled.div`
    width: 100%;
    padding-left: 25px;
    margin-bottom: 40px;
    color: #FFFFFF
`

const Container = styled.div`
    width: 100%;
    padding-left: 25px;
    padding-right: 25px;
    display: flex;
    flex-direction: column;
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
`