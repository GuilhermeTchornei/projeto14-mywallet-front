import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UserContext from "../../Context/UserContext";
import { transitionURL } from "../AxiosURL";
import BalanceRow from "./BalanceRow";

export default function Balance() {
    const [balance, setBalance] = useState([]);
    const { user } = useContext(UserContext);
    let totalValue;

    useEffect(() => {
        const config = {
            headers: { "Authorization": `Bearer ${user.token}` }
        }
        axios.get(transitionURL, config)
            .then((res) => {
                const transitions = res.data;
                setBalance(transitions.filter(t => t.userID === user.userID));
            })
            .catch(res => console.log(res));

    }, []);
    totalValue = balance?.map(b => (b.type === "entry" ? b.value : -b.value)).reduce((a, c) => a + c, 0);
    const empty = balance.length === 0;

    return (
        <Main direction={empty ? "row" : "column"}>
            {!empty ?
                <>
                    <BalanceStyle>
                        {balance.map((b, i) =>
                            <BalanceRow key={i}
                                date={b.date}
                                description={b.description}
                                value={b.value}
                                type={b.type} />)}
                    </BalanceStyle>
                    <Total color={totalValue > 0 ? "#03AC00" : "#C70000"}>
                        <p className="description">Saldo</p>
                        <p className="value">{
                            Math.abs(totalValue).toLocaleString('pt-br', {
                                style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2
                            })}</p>
                    </Total>
                </>
                :
                <Empty><p>Não há registros de entrada ou saída</p></Empty>}
        </Main>
    );
}


const Main = styled.main`
    width: 100%;
    height: 446px;
    border-radius: 5px;
    background-color: white;
    
    margin-top: 20px;
    margin-bottom: 13px;
    display: flex;
    flex-direction: ${props => props.direction};
    padding: 12px;
`;

const BalanceStyle = styled.div`
    width: 100%;
    max-width: 300px;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
`;

const Total = styled.div`
    width: 100%;
    height: 20px;
    font-size: 17px;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    p.description{
        font-weight: 700;
        color: black;
    }

    p.value{
        color: ${props => props.color};
    }
`;

const Empty = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-self: center;
    p{
        width: 80%;
        text-align: center;
        color: #868686;
        font-size: 20px;
    }
`;