import styled from "styled-components";
import { Link } from "react-router-dom";


export default function Login(){



    return(
        <Content>
            <h1>MyWallet</h1>
            <Input placeholder="E-mail"></Input>
            <Input placeholder="Senha"></Input>
            <Button>Entrar</Button>
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

