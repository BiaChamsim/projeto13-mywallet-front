import styled from "styled-components";

export default function Income(){
    return(
        <Content>
            <Header>
                <h1>Nova entrada</h1>
            </Header>
            <Container>
                <Input placeholder="Valor"></Input>
                <Input placeholder="Descrição"></Input>
                <Button>Salvar entrada</Button>
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
