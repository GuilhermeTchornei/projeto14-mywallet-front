import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../../Context/UserContext";
import Balance from "./Balance";

export default function Home() {
    const {user} = useContext(UserContext);

    const navigate = useNavigate();

    return (
        <>
            <HeaderStyle>
                <h1>Olá, { user.name}</h1>
                <ion-icon name="exit-outline" onClick={() => navigate('/')}></ion-icon>
            </HeaderStyle>
            <Balance />
            <Buttons>
                <button onClick={() => navigate('/nova-entrada')}>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova Entrada</p>
                </button>
                <button onClick={() => navigate('/nova-saida')}>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <p>Nova Saída</p>
                </button>
            </Buttons>
        </>
    );
}

const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;

    ion-icon{
        width: 30px;
        height: 30px;
        color: white;
    }
`;



const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;

    button{
        width: 155px;
        height: 114px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 11px;

        ion-icon{
            width: 25px;
            height: 25px;
            color: white;
        }

        p{
            width: 50%;
            font-size: 17px;
            font-weight: 700;
            color: white;
            text-overflow: clip;
            text-align: left;
        }
    }
`;