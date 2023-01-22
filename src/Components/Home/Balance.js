import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { transitionURL } from "../AxiosURL";
import BalanceRow from "./BalanceRow";

export default function Balance() {
    const [balance, setBalance] = useState([]);

    useEffect(() => {
        axios.get(transitionURL)
            .then((res) => {
                console.log(res.data);
                setBalance(res.data);
            })
            .catch(res => console.log(res));
    }, []);

    const empty = balance.length === 0;

    return (
        <Main direction={empty ? "row" : "column"}>
            {!empty ?
                balance.map((b, i) =>
                    <BalanceRow key={i}
                        date={b.date}
                        description={b.description}
                        value={b.value}
                        type={b.type} />) :
                <Empty><p>Não há registros de entrada ou saída</p></Empty>}
        </Main>
    );
}


const Main = styled.main`
    width: 100%;
    height: 446px;
    border-radius: 5px;
    background-color: white;
    overflow-y: auto;
    margin-top: 20px;
    margin-bottom: 13px;
    display: flex;
    flex-direction: ${props => props.direction};
    padding: 12px;
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