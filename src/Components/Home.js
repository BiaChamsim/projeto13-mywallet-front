import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';

import TokenContext from '../Contexts/TokenContext.js';
import NameContext from '../Contexts/NameContext.js';


export default function Home(){

    const [balance, setBalance] = useState([]);
    const {token, setToken} = useContext(TokenContext);
    const {name, setName} = useContext(NameContext);
    const [total, setTotal] = useState(0);


    useEffect(() => renderBalance(), [])

    function renderBalance(){
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        console.log(token)
        const promise = axios.get('https://mywallet31.herokuapp.com/balance', config)
        promise.then((response) =>{
            setBalance(response.data)
            console.log(response.data)
            calcTotal(response.data)
        })
        promise.catch((error) =>{
            console.log(error)
        })

    }

    function calcTotal(userBalance){
        let totalBalance = 0; 

        for(let i = 0; i < userBalance.length; i++){
            if(userBalance[i].type === "income"){
                totalBalance += Number(userBalance[i].value)
            }else{
                totalBalance -= Number(userBalance[i].value)
            }
        }
        console.log(totalBalance)
        console.log(typeof totalBalance)
        setTotal(totalBalance?.toFixed(2))
    }

    return(
        <Content>
            <Header>
                <h1>Olá, {name}</h1>
                <ion-icon name="log-out-outline"></ion-icon>
            </Header>
            <Container>
                <div>
                    {balance.map((balance) => {
                        return(
                        <Balance status={balance.type}>
                            <span>
                                <span style={{color: "#C6C6C6" }}>{balance.date}</span> 
                                <span style={{color: "#000000", margin: "10"}}>{balance.description}</span>
                            </span>
                            <span>{balance.value}</span> </Balance>
                            )                    })}
                </div>
                <TotalBalance totalValue={total}>
                    {balance.length === 0 ? "" : <><span style={{fontWeight: "bold"}}>SALDO</span><span>{total}</span></>} 
                </TotalBalance>
            </Container>
            <Footer>
                <NovaEntrada>
                    <Link to="/income">
                        <ion-icon name="add-circle-outline"></ion-icon>
                        <h2>Nova entrada</h2>
                    </Link>
                </NovaEntrada>
                <NovaSaida>
                    <Link to="/outcome">
                        <ion-icon name="remove-circle-outline"></ion-icon>
                        <h2>Nova saída</h2>                   
                    </Link>
                </NovaSaida>
            </Footer>



        </Content>
    )
}

const Content = styled.div`
    width: 100%;
    height: 100vh;
    background-color:#8B11BE;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Header = styled.div`
    width: 80%;
    height: 32px;
    margin-bottom: 22px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #FFFFFF;

    ion-icon{
        font-size: 30px;
    }
    
`

const Balance = styled.div`
    display: flex;
    justify-content: space-between;

    span:last-child{
        color: ${(props) => props.status === "income" ? "green" : "red"}
    }
    
`

const TotalBalance = styled.div`
    display: flex;
    justify-content: space-between;

    span:last-child{
        color: ${(props) => props.totalValue >= 0 ? "green" : "red"}
    }
`

const Container = styled.div`
    width: 80%;
    height: 446px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 13px;
    display: flex;
    flex-direction: column; 
    justify-content: space-between;
    padding: 10px;

`

const Footer = styled.div`
    width: 80%;
    justify-content: space-between;
    display: flex;
`

const NovaEntrada = styled.div`
    width: 126px;
    height: 114px;
    border-radius: 5px;
    background-color: #A329D6;
    

    ion-icon{
        font-size: 22px;
        color: #FFFFFF;
        margin-top: 10px;
        margin-left: 10px;
        margin-bottom: 18px;
    }

    h2{
        width: 64px;
        font-size: 17px;
        color: #FFFFFF;
        margin-left: 10px;
    }
`

const NovaSaida = styled.div`
    width: 126px;
    height: 114px;
    border-radius: 5px;
    background-color: #A329D6;

    ion-icon{
        font-size: 22px;
        color: #FFFFFF;
        margin-top: 8px;
        margin-left: 10px;
        margin-bottom: 18px;
    }

    h2{
        width: 64px;
        font-size: 17px;
        color: #FFFFFF;
        margin-left: 10px;
    }
`