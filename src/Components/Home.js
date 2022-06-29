import styled from "styled-components";

export default function Home(){



    return(
        <Content>
            <Header>
                <h1>Olá, Fulano</h1>
                <ion-icon name="log-out-outline"></ion-icon>

            </Header>
            <Container></Container>
            <Footer>
                <NovaEntrada>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <h2>Nova entrada</h2>
                </NovaEntrada>
                <NovaSaida>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <h2>Nova saída</h2>
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
    width: 50%;
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

const Container = styled.div`
    width: 50%;
    height: 446px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 13px;
`

const Footer = styled.div`
    width: 50%;
    justify-content: space-between;
    display: flex;
`

const NovaEntrada = styled.div`
    width: 156px;
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
    width: 156px;
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